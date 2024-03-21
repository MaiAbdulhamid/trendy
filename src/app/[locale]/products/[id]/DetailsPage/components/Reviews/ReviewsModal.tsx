import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { H3, P4 } from "@/app/[locale]/components/Typography";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import Modal from "@/app/[locale]/components/Modal";
import { Flex } from "@/app/[locale]/components/Grids";
import { Rating as MantineRationg } from "@mantine/core";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";

const ReviewsModal = ({ productId, opened, onClose }: any) => {
  const trans = useTranslations("Product");

  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const response: any = await axiosInstance.get(
        `products/reviews?id=${productId}`
        );
        setReviews(response.data.data.data);
        
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  };

  useEffect(() => {
    getReviews()
  }, []);

  return (
    <>
      <Modal opened={opened} close={onClose} size="md" centered>
        <Flex gap="1rem" direction="column" fullWidth>
          {<H3 textAlign="center">{trans("reviews")}</H3>}
          <Line margin="0" />
          {reviews.map((r: any) => (
            <Flex key={r.id} direction="column" fullWidth>
              <Flex justify="space-between" fullWidth>
                <P4>{r.name}</P4>
                <MantineRationg defaultValue={r.rate} readOnly />
              </Flex>
              <P4>{r.comment}</P4>
              <Line />
            </Flex>
          ))}
        </Flex>
      </Modal>
    </>
  );
};

export default ReviewsModal;
