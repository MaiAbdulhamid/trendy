"use client"
import React, { useEffect, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/svgs";
import axiosInstance from "../../lib/axios";
import { Flex } from "../Grids";
import Link from "next/link";
import { P4 } from "../Typography";
import theme from "../../utils/theme";

const SocialMedia = () => {
  const [socialMediaData, setSocialMediaData] = useState<any>([]);

  const fetchSocialMediaData = async () => {
    try {
      const response: any = await axiosInstance.get("socialMedia");
      setSocialMediaData(response.data.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSocialMediaData();
  }, [setSocialMediaData]);
  
  const socialMediaLinks = [
    {
      type: "youtube",
      url:
        socialMediaData.find((data: any) => data.type === "youtube")?.social ||
        "",
      text: <YoutubeIcon />,
    },
    {
      type: "instagram",
      url:
        socialMediaData.find((data: any) => data.type === "instagram")
          ?.social || "",
      text: <InstagramIcon />,
    },
    {
      type: "facebook",
      url:
        socialMediaData.find((data: any) => data.type === "facebook")?.social ||
        "",
      text: <FacebookIcon />,
    },
    {
      type: "twitter",
      url:
        socialMediaData.find((data: any) => data.type === "twitter")?.social ||
        "",
      text: <TwitterIcon />,
    },
  ];
  return (
    <Flex align="center" gap="1rem">
      {socialMediaLinks.map((link: any) => {
        return (
          <Link key={link.type} href={link.url}>
            <P4 weight="100" color={theme.colors.white}>
              {link.text}
            </P4>
          </Link>
        );
      })}
    </Flex>
  );
};

export default SocialMedia;
