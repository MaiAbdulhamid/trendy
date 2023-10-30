import { RectangularCardContainer } from "./style";
import { RectangularCardProps } from "./type";
import { P4 } from "../Typography";
import Link from "next/link";
import { RectangularShape } from "../shapes/Rectangular";

export default function RectangularCard({
  item,
  to,
  boxSize = 240,
}: RectangularCardProps) {
  const { id, name, image, color_code } = item;
  console.log(item)
  return (
    <RectangularCardContainer>
      <Link href={to}>
        <RectangularShape
          size={Number(boxSize)}
          style={{
            backgroundColor: color_code
          }}
        >
          <img src={image} />
        </RectangularShape>
      </Link>
    </RectangularCardContainer>
  );
}
