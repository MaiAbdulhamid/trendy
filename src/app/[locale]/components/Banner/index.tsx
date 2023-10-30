import Is from "@mongez/supportive-is";
import { BannerBox } from "./style";
import { BannerProps } from "./type";
import Link from "next/link";
import { Col } from "../Grids";
import { Grid } from "@mantine/core";

export default function Banner(props: BannerProps) {
  let { col, data, radius } = props;

  data = !Is.array(data) ? [data] : data;

  col = Is.empty(col) ? 1 : col;

  return (
    <Grid>
      <Col span={12 / Number(col)}>
        <BannerBox radius={radius}>
          <Link href={data[0].image}>
            <img src={data[0].image} className="full-width" />
          </Link>
        </BannerBox>
      </Col>
    </Grid>
  );
}
