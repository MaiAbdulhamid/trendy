import React, { useState } from "react";
import { PaymentMethodWrapper } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import { RadioGroup, Radio } from "@mantine/core";

const PaymentMethods = ({ methods }: any) => {
  return (
    <>
      <RadioGroup>
        {methods?.map((method: any) => (
          <>
            <PaymentMethodWrapper key={method.id}>
              <Flex gap="1rem" align="center" fullWidth>
                <Radio
                  id={`method-${method.id}`}
                  name="payment_method"
                  value={method.id}
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

export default PaymentMethods;
