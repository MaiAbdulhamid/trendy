import React from "react";
import { AddressCard } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import Button from "@/app/[locale]/components/Button/Button";
import {
  DeleteIcon,
  HomeIcon,
  PencilIcon,
  RemoveIcon,
} from "@/app/[locale]/assets/svgs";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";

const Address = ({ address }: any) => {
  const trans = useTranslations("Addresses");
  const deleteHandler = async () => {
    try {
      const response: any = axiosInstance.delete(
        `address/delete/${address.id}`
      );
      console.log(response)
      showNotification({
        type: "success",
        message: response.message,
      });
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  };
  return (
    <AddressCard>
      <Flex justify="space-between" fullWidth>
        <H4>
          <Flex gap="1rem">
            {address.default === 1 && <HomeIcon />}
            {address.type.name}
          </Flex>
        </H4>
        <Flex gap="1rem">
          <Button noStyle>
            <PencilIcon />
            {trans("edit")}
          </Button>
          {address.default !== 1 && (
            <Button noStyle onClick={deleteHandler}>
              <DeleteIcon />
              {trans("delete")}
            </Button>
          )}
        </Flex>
      </Flex>
      <Flex>
        <P4>{trans("name")}:</P4>
        <P4>{address.full_name}</P4>
      </Flex>
      <Flex>
        <P4>{trans("address")}:</P4>
        <P4>{address.address}</P4>
      </Flex>
      <Flex>
        <P4>{trans("phoneNumber")}:</P4>
        <P4>{address.phone}</P4>
      </Flex>
    </AddressCard>
  );
};

export default Address;
