import { Container } from "@/app/[locale]/components/Grids";
import { H2, H5, H6, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Card, ReturnPolicyPageWrapper } from "./style";
import axiosInstance from "@/app/[locale]/lib/axios";

const ReturnPolicyPage = () => {
  const trans = useTranslations("ReturnPolicy");
  const [returnPolicy, setReturnPolicy] = useState<any>();

  const getReturnPolicy = async () => {
    try {
      const response: any = await axiosInstance.get(
        "setting?setting_type=return_policy"
      );
      setReturnPolicy(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReturnPolicy();
  }, []);

  return (
    <ReturnPolicyPageWrapper>
      <Container>
        <H2>{returnPolicy?.title}</H2>
        <Card>
          <div
            dangerouslySetInnerHTML={{
              __html: returnPolicy?.content,
            }}
          />
        </Card>
      </Container>
    </ReturnPolicyPageWrapper>
  );
};

export default ReturnPolicyPage;
