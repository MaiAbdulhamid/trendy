import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/app/[locale]/components/Loader";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Flex } from "@/app/[locale]/components/Grids";
import { LineIcon, StatusCircleIcon, StatusLineIcon } from "@/app/[locale]/assets/svgs";
import { Badge } from "./style";
import { P4, Small } from "@/app/[locale]/components/Typography";

const OrderStatus = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [status, setStatus] = useState<any>();
  const params = useParams();

  const fetchOrderStatus = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get(
        `order/status?order_id=${params.id}`
      );
      const data = response.data.data.data;
      setStatus(data);
    } catch (error: any) {
      console.log(error);
    }
  }, [params.id]);

  useEffect(() => {
    setIsPageLoading(false);
    fetchOrderStatus();
  }, [params.id, fetchOrderStatus]);

  if (isPageLoading) return <Loader />;

  return (
    <Flex align="start" gap="1rem">
      <Flex direction="column" align="center" justify="center">
        {status?.map((s: any, index: number) => (
          <Fragment key={s.id}>
            <StatusCircleIcon color={s.color} />
            {index !== status.length -1 && <StatusLineIcon />}
          </Fragment>
        ))}
      </Flex>
      <Flex direction="column">
        {status?.map((s: any) => (
          <Fragment key={s.id + "s"}>
            <Badge color={s.color}>{s.name}</Badge>
            <Small>{s.date}</Small>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  )
}

export default OrderStatus