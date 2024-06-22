import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Padding, Wrapper } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import URLS from "@/app/[locale]/utils/urls";
import { HomeIcon } from "@/app/[locale]/assets/svgs";
import PaymentMethods from "./PaymentMethods";
import { HiddenInput } from "@mongez/react-form";
import SwitchInput from "@/app/[locale]/components/Form/SwitchInput";
import { getCookie } from "cookies-next";
import cache from "@mongez/cache";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import Button from "@/app/[locale]/components/Button/Button";

const AddressAndPaymentMethods = ({ checkout }: any) => {
  const trans = useTranslations("Checkout");
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [addressId, setAddressId] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [currency, setCurrency] = useState(
    JSON.parse(getCookie("country_object") || "{}").currency_en
  );
  const [customerName, setCustomerName] = useState("");
  const [isWalletEnabled, setIsWalletEnabled] = useState(
    Boolean(checkout?.is_wallet)
  );

  const getUserCurrency = useCallback(() => {
    return JSON.parse(getCookie("country_object") || "{}").currency_en;
  }, []);

  useEffect(() => {
    setAddressId(checkout?.address?.id || "");
    setTotalAmount(Number(checkout?.total) || 0);
    setPhoneNumber(checkout?.address?.phone || "");
    setCountryCode(checkout?.address?.country?.code || "");
    setCustomerName(checkout?.address?.full_name || "");
    setCurrency(getUserCurrency());
  }, [checkout]);

  useEffect(() => {
    setToken(cache.get("token"));
  }, []);

  const onChangePaymentByWallet = useCallback(async (value: any) => {
    try {
      const response: any = await axiosInstance.post(
        "user/change_status_wallet",
        {
          status: value,
        }
      );
      showNotification({
        type: "success",
        message: response.data.message,
      });
      setIsWalletEnabled(value); // Update state based on successful response
    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response?.data?.message || "An error occurred",
      });
      setIsWalletEnabled(false); // Reset switch state if there's an error
    }
  }, []);

  const memoizedAddress = useMemo(() => {
    return (
      <Wrapper>
        <Flex direction="column" justify="space-between" fullWidth>
          <HiddenInput name="address_id" value={addressId} />
          <HiddenInput name="totalAmount" value={totalAmount} />
          <HiddenInput name="phoneNumber" value={phoneNumber} />
          <HiddenInput name="countryCode" value={countryCode} />
          <HiddenInput name="currency" value={currency} />
          <HiddenInput name="customerName" value={customerName} />

          <H4>
            <Flex gap="1rem">
              <HomeIcon />
              {checkout?.address?.name}
            </Flex>
          </H4>
          <P4>{checkout?.address?.address}</P4>
          <P4>
            {checkout?.address?.country?.code}
            {checkout?.address?.phone}
          </P4>
        </Flex>
      </Wrapper>
    );
  }, [
    addressId,
    totalAmount,
    phoneNumber,
    countryCode,
    currency,
    customerName,
    checkout,
  ]);

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
      {memoizedAddress}
      <Padding>
        <Flex fullWidth>
          <P4>{trans("paymentMethod")}</P4>
        </Flex>
      </Padding>
      {token && (
        <Padding>
          <SwitchInput
            name="is_wallet"
            label={trans("paymentByWallet")}
            onChange={onChangePaymentByWallet}
            value={isWalletEnabled}
          />
        </Padding>
      )}
      <Wrapper>
        <PaymentMethods methods={checkout?.data} />
      </Wrapper>
    </>
  );
};

export default AddressAndPaymentMethods;
