import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { ProductOption, ProductOptionsContainer } from "./style";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import { H4, H6 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import CheckboxInput from "@/app/[locale]/components/Form/CheckboxInput";
import Radio, { RadioGroup } from "@/app/[locale]/components/Form/Radio";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { Flex } from "@/app/[locale]/components/Grids";
import ColorRadio from "@/app/[locale]/components/Form/ColorRadio";
import { useState } from "react";

export default function ProductOptions({ product }: any) {
  const { main_variations } = product;

  const [subVariation, setSubVariation] = useState([])

  const chooseOption = (e: any, optionId: number) => {
    console.log(e);

    console.log(optionId);
  };

  if (Is.empty(main_variations)) return null;

  return (
    <>
      <ProductOptionsContainer>
        <H4>{main_variations.name}</H4>
        <Flex gap="1rem">
          {main_variations.type === 1
            ? main_variations.variations.map((option: any) => (
                <ProductOption key={option.id}>
                  <RadioGroup>
                    <Radio
                      name="option"
                      value={String(option.id)}
                      label={<H6>{option.name}</H6>}
                      disabled={option.stock === 0}
                      onChange={(e) =>
                        chooseOption(e, option.id)
                      }
                    />
                  </RadioGroup>
                </ProductOption>
              ))
            : main_variations.variations.map((option: any) => (
                <ProductOption key={option.id}>
                  <RadioGroup>
                    <ColorRadio
                      name="option"
                      value={String(option.id)}
                      label={<H6>{option.name}</H6>}
                      disabled={option.stock === 0}
                      color={option.color}
                      onChange={() =>
                        chooseOption(option.id, option.sub_variations)
                      }
                    />
                  </RadioGroup>
                </ProductOption>
              ))}
        </Flex>
      </ProductOptionsContainer>
      <Line color="#3434344D" />
    </>
  );
}
