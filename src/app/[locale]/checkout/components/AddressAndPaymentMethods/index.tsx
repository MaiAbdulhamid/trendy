import Button from "@/app/[locale]/components/Button/Button";
import { Flex } from "@/app/[locale]/components/Grids";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Padding, Wrapper } from "./style";
import { useRouter } from "next/navigation";
import URLS from "@/app/[locale]/utils/urls";
import { HomeIcon } from "@/app/[locale]/assets/svgs";
import PaymentMethods from "./PaymentMethods";
import { HiddenInput } from "@mongez/react-form";
import SwitchInput from "@/app/[locale]/components/Form/SwitchInput";

const AddressAndPaymentMethods = ({ checkout }: any) => {
  const trans = useTranslations("Checkout");
  const router = useRouter();
  const [addressId, setAddressId] = useState("");

  useEffect(() => {
    setAddressId(checkout?.address?.id);
  }, [checkout]);
  
  return (
    <>
      <Padding>
        <Flex fullWidth justify="space-between" align="center">
          <P4>{trans("shipTo")}</P4>
          <Button noStyle onClick={() => router.push(URLS.addAddress)}>
            + {trans("addNewAddress")}
          </Button>
        </Flex>
      </Padding>
      <Wrapper>
        <Flex direction="column" justify="space-between" fullWidth>
          <HiddenInput name="address_id" value={addressId} />
          <H4>
            <Flex gap="1rem">
              <HomeIcon />
              {checkout?.address?.name}
            </Flex>
          </H4>
          <P4>{checkout?.address?.address}</P4>
          <P4>{checkout?.address?.phone}</P4>
        </Flex>
      </Wrapper>
      <Padding>
        <Flex fullWidth>
          <P4>{trans("paymentMethod")}</P4>
        </Flex>
      </Padding>
      <Padding>
        <SwitchInput
          name="is_wallet"
          label={trans("paymentByWallet")}
          defaultValue={Boolean(checkout?.is_wallet)}
        />
      </Padding>
      <Wrapper>
        <PaymentMethods methods={checkout?.data} />
      </Wrapper>
    </>
  );
};

export default AddressAndPaymentMethods;
