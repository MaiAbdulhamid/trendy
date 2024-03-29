import React, { useEffect, useState } from "react";
import { Card, PageWrapper } from "./style";
import Title from "../Title";
import { Form, HiddenInput } from "@mongez/react-form";
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
import GoogleMapInput from "@/app/[locale]/components/Form/GoogleMapInput/EditGoogleMap";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import cache from "@mongez/cache";
import Loader from "@/app/[locale]/components/Loader";

const AddAddressForm = ({useAddress} : any) => {
  const trans = useTranslations("Auth");
  const [address, setAddress] = useState<any>(useAddress);

  useEffect(() => {
    setAddress(useAddress)
  }, [useAddress]);

  const [cities, setCities] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState<any>("");
  const [regions, setRegions] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>(address?.country?.id);
  useEffect(() => {
    setSelectedCountry(address?.country?.id)
  }, [setSelectedCountry]);

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
      const response: any = await axiosInstance.post("address/updateOrCreate", {
        ...values,
      });
      showNotification({
        type: "success",
        message: response.data.message,
      });
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

  if(useAddress === 'undefined') return <Loader />

  return (
    <PageWrapper>
      <Title />
      <Card>
        <Form onSubmit={onSubmit}>
          <Flex direction="column" gap="1rem" fullWidth>
            <HiddenInput name="address_id" value={address?.id} />
            <TextInput
              name="full_name"
              label={"fullname"}
              placeholder={"fullname"}
              defaultValue={address?.full_name}
              required
            />
            <GoogleMapInput
              required
              placeholder={"addressLineOne"}
              label={"addressLineOne"}
              address={address?.address}
              lat={address?.lat}
              lng={address?.lng}
            />
            <TextInput
              name="address_2"
              label={"addressLineTwo"}
              placeholder={"addressLineTwo"}
              defaultValue={address?.address_2}
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
              defaultValue={String(address?.type?.id)}
            />
            <Grid>
              <Col span={{ base: 12, md: 6 }}>
                <NumberInput
                  name="postal_code"
                  label={trans("postalCode")}
                  placeholder={trans("postalCode")}
                  defaultValue={address?.postal_code}
                />
              </Col>
              <Col span={{ base: 12, md: 6 }}>
                <PhoneNumberInput
                  name="phone"
                  label="phoneNumber"
                  placeholder="phoneNumber"
                  defaultValue={address?.phone}
                  icon
                  onChangeCountry={onChangeCountry}
                  country_id={String(address?.country?.id)}
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
                  defaultValue={String(address?.city.id)}
                />
              </Col>
              <Col span={{ base: 12, md: 6 }}>
                <SelectInput
                  name="region_id"
                  label="region"
                  data={regions}
                  clearable
                  defaultValue={String(address?.region.id)}
                />
              </Col>
            </Grid>
            <Flex justify="space-between" fullWidth align="center">
              <SwitchInput
                name="default"
                label={trans("makeDefault")}
                defaultValue={Number(address?.default)}
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
