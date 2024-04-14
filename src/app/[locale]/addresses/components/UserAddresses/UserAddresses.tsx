import { Flex } from "@/app/[locale]/components/Grids";
import { H2, P4 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Address from "./Address";
import { addressesAtom } from "../atoms/addresses-atom";
import cache from "@mongez/cache";
import Button from "@/app/[locale]/components/Button/Button";
import { useRouter } from "next/navigation";
import URLS from "@/app/[locale]/utils/urls";

const UserAddresses = () => {
  const trans = useTranslations("Addresses");
  const router = useRouter();

  const [addresses, setAddresses] = useState(addressesAtom.useValue().records);

  const getAddresses = async () => {
    try {
      const response = await axiosInstance.get("address");
      // setAddresses(response.data.data.data);
      addressesAtom.update({
        records: response.data.data.data,
      });
      setAddresses(addressesAtom.value.records);
      cache.set("addresses", response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <Flex justify="space-between" fullWidth>
        <H2>{trans("addresses")}</H2>
        <Button noStyle onClick={() => router.push(URLS.addAddress)}>
          + {trans("addNewAddress")}
        </Button>
      </Flex>
      {Is.empty(addresses) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <Grid>
          {addresses.map((address: any) => (
            <Flex key={address.id} direction="column" fullWidth>
              <Address address={address} />
            </Flex>
          ))}
        </Grid>
      )}
    </>
  );
};

export default UserAddresses;
