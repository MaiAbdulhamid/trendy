import React from "react";
import { Card } from "./style";
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

  return (
    <Card>
      <Flex justify="space-between" fullWidth>
        <H4>
          <Flex gap="1rem">
            <HomeIcon />
            {address.name}
          </Flex>
        </H4>
      </Flex>
      <Flex>
        <P4 color="#8c92ac">{trans("address")}:</P4>
        <P4>{address.address}</P4>
      </Flex>
      <Flex>
        <P4 color="#8c92ac">{trans("phoneNumber")}:</P4>
        <P4>{address.phone}</P4>
      </Flex>
    </Card>
  );
};

export default Address;
