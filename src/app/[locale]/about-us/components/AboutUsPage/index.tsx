import { Container } from "@/app/[locale]/components/Grids";
import { H2, H5, H6, P4 } from "@/app/[locale]/components/Typography";
import React, { useEffect, useState } from "react";
import { Card, AboutUsPageWrapper } from "./style";
import axiosInstance from "@/app/[locale]/lib/axios";
import AboutImg from "../../../assets/images/about-us.png";
import Image from "next/image";

const AboutUsPage = () => {
  const [aboutUs, setAboutUs] = useState<any>();

  const getAboutUs = async () => {
    try {
      const response: any = await axiosInstance.get(
        "setting?setting_type=about_us"
      );
      setAboutUs(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <AboutUsPageWrapper>
      <Container>
        <Image src={AboutImg}  alt="About Us Image" />
        <H2>{aboutUs?.title}</H2>
        <Card>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutUs?.content,
            }}
          />
        </Card>
      </Container>
    </AboutUsPageWrapper>
  );
};

export default AboutUsPage;
