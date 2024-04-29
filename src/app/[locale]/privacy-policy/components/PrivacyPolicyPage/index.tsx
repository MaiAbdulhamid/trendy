import { Container } from "@/app/[locale]/components/Grids";
import { H2, H5, H6, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Card, PrivacyPolicyPageWrapper } from "./style";
import axiosInstance from "@/app/[locale]/lib/axios";

const PrivacyPolicyPage = () => {
  const trans = useTranslations("PrivacyPolicy");
  const [privacyPolicy, setPrivacyPolicy] = useState<any>();

  const getPrivacyPolicy = async () => {
    try {
      const response: any = await axiosInstance.get(
        "setting?setting_type=privacy_policy"
      );
      setPrivacyPolicy(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  return (
    <PrivacyPolicyPageWrapper>
      <Container>
        <H2>{trans("privacyPolicy")}</H2>
        <Card>
          <div
            dangerouslySetInnerHTML={{
              __html: privacyPolicy?.content,
            }}
          />
        </Card>
      </Container>
    </PrivacyPolicyPageWrapper>
  );
};

export default PrivacyPolicyPage;
