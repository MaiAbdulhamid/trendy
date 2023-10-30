import { CircleCardItemContainer } from "./style";
import { CircleCardProps } from "./type";
import { P4 } from "../Typography";
import { RoundedShape } from "../shapes/Rounded";
import Link from "next/link";

export default function CircleCard({
  item,
  to,
  boxSize = 140,
}: CircleCardProps) {
  const { id, name, image, color_code } = item;
  console.log(item)
  return (
    <CircleCardItemContainer>
      <Link href={to}>
        <RoundedShape
          size={Number(boxSize)}
          className="circle--image center-block"
          style={{
            backgroundColor: color_code
          }}
        >
          <img src={image} />
        </RoundedShape>
        <P4 className="title--card">{name}</P4>
      </Link>
    </CircleCardItemContainer>
  );
}
