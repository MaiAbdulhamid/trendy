import React, { useState } from "react";
import PaymentMethodsRadio from "@/app/[locale]/components/Form/PaymentMethodsRadio";

const PaymentMethods = ({ methods }: any) => {
  return (
    <>
      <PaymentMethodsRadio
        methods={methods}
      />
    </>
  );
};

export default PaymentMethods;
