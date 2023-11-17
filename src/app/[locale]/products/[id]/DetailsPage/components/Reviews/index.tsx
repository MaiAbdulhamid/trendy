import { Badge } from "@mantine/core";
import { ReviewWrapper } from "./style";
import { P4 } from "@/app/[locale]/components/Typography";
import StarIcon from "@/app/[locale]/assets/svgs/StarIcon";
import EnNumber from "@/app/[locale]/utils/EnNumber";
import theme from "@/app/[locale]/utils/theme";

export default function Reviews({ rate }: any) {

  if(+rate === 0) return null;

  return (
    <ReviewWrapper>
      <P4>
        {Array.from({ length: 5 }).map((star, index) => (
          <StarIcon key={`star=${index}`} />
        ))}
        <EnNumber> ({rate}) </EnNumber>
      </P4>
    </ReviewWrapper>
  );
}
