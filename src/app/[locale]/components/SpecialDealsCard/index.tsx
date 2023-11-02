import Link from "next/link";
import {
  ImageBox,
  ProductBox,
  StyledTitle,
} from "./style";
import { ProductCardProps } from "./type";
import { resolveLink } from "../../utils/general";

export default function SpecialDealsCard(props: ProductCardProps) {
  const { product } = props;
  return (
  <Link href={resolveLink(product)}>  
    <ProductBox>
      <ImageBox>
        <img src={product?.image} className="img-responsive" />
        <StyledTitle>{product.title}</StyledTitle>
      </ImageBox>
    </ProductBox>
  </Link>
  );
}
