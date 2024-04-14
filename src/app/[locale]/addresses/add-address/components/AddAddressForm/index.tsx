import React, { useEffect, useState } from "react";
import { Card, PageWrapper } from "./style";
import Title from "../Title";
import { Form } from "@mongez/react-form";
import TextInput from "@/app/[locale]/components/Form/TextInput";
import { useTranslations } from "next-intl";
import SelectInput from "@/app/[locale]/components/Form/SelectInput";
import { Grid } from "@mantine/core";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import PhoneNumberInput from "@/app/[locale]/components/Form/PhoneNumberInput";
import NumberInput from "@/app/[locale]/components/Form/NumberInput";
import axiosInstance from "@/app/[locale]/lib/axios";
import SwitchInput from "@/app/[locale]/components/Form/SwitchInput";
import Button from "@/app/[locale]/components/Button/Button";
import { P4 } from "@/app/[locale]/components/Typography";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";
import GoogleMapInput from "@/app/[locale]/components/Form/GoogleMapInput/AddGoogleMap";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import cache from "@mongez/cache";

const AddAddressForm = () => {
  const trans = useTranslations("Auth");

  const [cities, setCities] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState<any>("");
  const [regions, setRegions] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>(3);

  const onChangeCountry = (e: any) => {
    setSelectedCountry(e);
  }
  const getCities = async () => {
    try {
      const response = await axiosInstance.get(`getCitiesRegions?country_id=${selectedCountry}`);
      const formattedCities = response.data.data.data.map((city: any) => ({
        label: city.name,
        value: String(city.id),
        regions: city.regions
      }));
      setCities(formattedCities);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
    console.log(cities)
  }, [selectedCountry]);

  const selectedCityHandler = (value: any) => {
    setSelectedCity(value);
    const regions = cities.find((city: any) => city.value === value )
    const formattedRegions = regions.regions.map((region :any) => (
      {
        label: region.name,
        value: String(region.id)
      }
    ))
    setRegions(formattedRegions)
  };

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async ({ values }: any) => {
    setIsSubmitting(true);
    
    try {
      const response: any = await axiosInstance.post(
        "address/updateOrCreate",
        {...values}
      );
      cache.set("address", response.data.data)
      showNotification({
        type: "success",
        message: response.data.message,
      });

      window.location.reload();

    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageWrapper>
      <Title />
      <Card>
        <Form onSubmit={onSubmit}>
          <Flex direction="column" gap="1rem" fullWidth>
            <TextInput
              name="full_name"
              label={"fullname"}
              placeholder={"fullname"}
              required
            />
            {/* <TextInput
              name="address_1"
              label={"addressLineOne"}
              placeholder={"addressLineOne"}
              required
            /> */}
            <GoogleMapInput required placeholder={'addressLineOne'} label={"addressLineOne"} name="address_1" />
            <TextInput
              name="address_2"
              label={"addressLineTwo"}
              placeholder={"addressLineTwo"}
            />
            <SelectInput
              name="type"
              label="type"
              data={[
                { label: trans("home"), value: "1" },
                { label: trans("work"), value: "2" },
              ]}
              required
              clearable
            />
            <Grid>
              <Col span={{ base: 12, md: 6 }}>
                <NumberInput
                  name="postal_code"
                  label={trans("postalCode")}
                  placeholder={trans("postalCode")}
                  required
                />
              </Col>
              <Col span={{ base: 12, md: 6 }}>
                <PhoneNumberInput
                  name="phone"
                  label="phoneNumber"
                  placeholder="phoneNumber"
                  icon
                  onChangeCountry={onChangeCountry}
                  required
                />
              </Col>
            </Grid>
            <Grid>
              <Col span={{ base: 12, md: 6 }}>
                <SelectInput
                  name="city_id"
                  label="city"
                  data={cities}
                  onChange={selectedCityHandler}
                  required
                  clearable
                />
              </Col>
              <Col span={{ base: 12, md: 6 }}>
                <SelectInput
                  name="region_id"
                  label="region"
                  data={regions}
                  required
                  clearable
                />
              </Col>
            </Grid>
            <Flex justify="space-between" fullWidth align="center">
              <SwitchInput
                name='default'
                label={trans('makeDefault')}
              />
              <Flex gap="2rem">
                <Button variant="outline">
                  <P4>{trans("cancel")}</P4>
                </Button>
                <SubmitButton isSubmitting={isSubmitting}>
                  <P4>{trans("save")}</P4>
                </SubmitButton>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      </Card>
    </PageWrapper>
  );
};

export default AddAddressForm;
