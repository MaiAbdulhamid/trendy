import React, { useState } from "react";
import { PaymentMethodWrapper } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import { RadioGroup, Radio } from "@mantine/core";
import { HiddenInput, requiredRule, useFormControl } from "@mongez/react-form";

const PaymentMethodsRadio = (props: any) => {
  const { name, checked, changeValue, otherProps } = useFormControl(props);
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <>
      <HiddenInput name="payment_method" value={paymentMethod} />
      <RadioGroup required>
        {props.methods?.map((method: any) => (
          <>
            <PaymentMethodWrapper key={method.id}>
              <Flex gap="1rem" align="center" fullWidth>
                <Radio
                  id={`method-${method.id}`}
                  name={name}
                  value={String(method.id)}
                  checked={checked}
                  onChange={(e) => {
                    setPaymentMethod(e.currentTarget.value);
                    changeValue(e.currentTarget.value);
                  }}
                  {...otherProps}
                />
                <label htmlFor={`method-${method.id}`}>
                  <Flex fullWidth justify="space-between">
                    <Flex direction="column">
                      <P4>{method.title}</P4>
                      <P4>{method.content}</P4>
                    </Flex>
                    <img src={method.image} />
                  </Flex>
                </label>
              </Flex>
            </PaymentMethodWrapper>
          </>
        ))}
      </RadioGroup>
    </>
  );
};

export default PaymentMethodsRadio;

PaymentMethodsRadio.defaultProps = {
  type: "radio",
  rules: [requiredRule],
};
