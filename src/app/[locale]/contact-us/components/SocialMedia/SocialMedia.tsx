import { ContactUsSocialIcon } from "@/app/[locale]/assets/svgs";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const SocialMedia = () => {
  const trans = useTranslations("ContactUs");
  const [socialMedia, setSocialMedia] = useState<any>();

  const getSocialMedia = async () => {
    try {
      const response: any = await axiosInstance.get("socialMedia");
      setSocialMedia(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSocialMedia();
  }, []);

  return (
    <Flex justify="center" fullWidth gap="6rem">
      <Flex direction="column" align="center" justify="center">
        <a href={`tel:${socialMedia?.phone}`} target="_blank">
          <ContactUsSocialIcon type="phone" />
        </a>
        <P4>{trans("callUs")}</P4>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <a href={`https://wa.me/${socialMedia?.whatsapp}`} target="_blank">
          <ContactUsSocialIcon type="whatsapp" />
        </a>
        <P4>{trans("whatsapp")}</P4>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <a href={`mailto:${socialMedia?.email}`} target="_blank">
          <ContactUsSocialIcon type="email" />
        </a>
        <P4>{trans("email")}</P4>
      </Flex>
    </Flex>
  );
};

export default SocialMedia;
