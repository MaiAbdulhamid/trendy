import { ReviewWrapper } from "./style";
import { P4 } from "@/app/[locale]/components/Typography";
import EnNumber from "@/app/[locale]/utils/EnNumber";
import { Rating as MantineRationg } from "@mantine/core";
import { Flex } from "@/app/[locale]/components/Grids";
import { useDisclosure } from "@mantine/hooks";
import ReviewsModal from "./ReviewsModal";
import Button from "@/app/[locale]/components/Button/Button";

export default function Reviews({ rate, product }: any) {
  const [
    openedProductReviews,
    { open: openProductReviews, close: closeProductReviews },
  ] = useDisclosure(false);


  if (+rate === 0) return null;

  return (
    <Button noStyle  onClick={openProductReviews}>
      <ReviewWrapper>
        <P4>
          {/* {Array.from({ length: 5 }).map((star, index) => (
            <StarIcon key={`star=${index}`} />
          ))} */}
          <Flex align="center">
            <MantineRationg defaultValue={rate} readOnly />
            <EnNumber> ({rate}) </EnNumber>
          </Flex>
        </P4>
        <ReviewsModal
          productId={product.id}
          opened={openedProductReviews}
          onClose={closeProductReviews}
        />
      </ReviewWrapper>
    </Button>
  );
}
