import { Container } from "@/app/[locale]/components/Grids";
import { H2, H5, H6, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Card, TermsAndConditionsPageWrapper } from "./style";
import axiosInstance from "@/app/[locale]/lib/axios";

const TermsAndConditionsPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<any>();

  const getTermsAndConditions = async () => {
    try {
      const response: any = await axiosInstance.get(
        "setting?setting_type=terms"
      );
      setTermsAndConditions(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTermsAndConditions();
  }, []);

  return (
    <TermsAndConditionsPageWrapper>
      <Container>
        <H2>{termsAndConditions?.title}</H2>
        <Card>
          <div
            dangerouslySetInnerHTML={{
              __html: termsAndConditions?.content,
            }}
          />
        </Card>
      </Container>
    </TermsAndConditionsPageWrapper>
  );
};

export default TermsAndConditionsPage;
