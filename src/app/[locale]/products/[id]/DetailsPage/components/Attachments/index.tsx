import { Group } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { AttachmentsWrapper, Wrapper } from "./style";
import { H7, P4 } from "@/app/[locale]/components/Typography";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { useTranslations } from "next-intl";

export default function Attachments({ product }: any) {
  const trans = useTranslations("Product");

  if (Is.empty(product.specifications)) return null;

  return (
    <Wrapper>
      <H7> {trans("promotions")}</H7>
      {(product.specifications || []).map((item: any) => (
        <AttachmentsWrapper
          key={item.id}
          fullWidth
          justify="space-between"
          align="center"
        >
          <Group>
            <img className="img" src={item.image} />
            <P4>{item.name}</P4>
          </Group>
        </AttachmentsWrapper>
      ))}
      <Line color="#F7F5F4" />
    </Wrapper>
  );
}
