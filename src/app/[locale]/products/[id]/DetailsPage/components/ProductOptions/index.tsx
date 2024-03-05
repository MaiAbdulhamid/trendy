import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { ProductOption, ProductOptionsContainer } from "./style";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import { H4, H6, H7 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import CheckboxInput from "@/app/[locale]/components/Form/CheckboxInput";
import Radio, { RadioGroup } from "@/app/[locale]/components/Form/Radio";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { Flex } from "@/app/[locale]/components/Grids";
import ColorRadio from "@/app/[locale]/components/Form/ColorRadio";
import { useState } from "react";
import ProductQuantity from "../ProductQuantity";

export default function ProductOptions({ product }: any) {
  const { main_variations } = product;

  const [subVariation, setSubVariation] = useState<any>();
  const [variationId, setVariationId] = useState<any>();

  const chooseOption = (e: any, optionId: number) => {
    setVariationId(optionId);
    console.log(optionId);

    const subVariations = main_variations.variations.find(
      (variation: any) => variation.id === optionId
    )?.sub_variations;

    setSubVariation(subVariations);
  };

  const chooseSubOption = (optionId: number) => {
    console.log(optionId);
    setVariationId(optionId);
  };

  if (Is.empty(main_variations))
    return null;

  return (
    <>
      <ProductOptionsContainer>
        <H7>{main_variations.name}</H7>
        <RadioGroup>
          <ProductOption>
            {main_variations.type === 1
              ? main_variations.variations.map((option: any) => (
                  <Radio
                    key={option.id}
                    name="option"
                    value={String(option.id)}
                    label={<H6>{option.name}</H6>}
                    disabled={option.stock === 0}
                    onInput={(e) => chooseOption(e, option.id)}
                    required
                  />
                ))
              : main_variations.variations.map((option: any) => (
                  <ColorRadio
                    key={option.id}
                    name="option"
                    value={String(option.id)}
                    disabled={option.stock === 0}
                    color={option.color}
                    onInput={(e) => chooseOption(e, option.id)}
                    required
                  />
                ))}
          </ProductOption>
        </RadioGroup>
        {subVariation && (
          <>
            <Line color="#3434344D" />

            <H7>{subVariation.name}</H7>

            <RadioGroup>
              <ProductOption>
                {subVariation.type === 1
                  ? subVariation.sub_sub_variations.map((subOption: any) => (
                      <Radio
                        key={subOption.id}
                        name="sub_option"
                        value={String(subOption.id)}
                        label={<H6>{subOption.name}</H6>}
                        disabled={subOption.stock === 0}
                        onInput={() => chooseSubOption(subOption.id)}
                        required
                      />
                    ))
                  : subVariation.sub_sub_variations.map((subOption: any) => (
                      <ColorRadio
                        key={subOption.id}
                        name="sub_option"
                        value={String(subOption.id)}
                        disabled={subOption.stock === 0}
                        color={subOption.color}
                        onInput={() => chooseSubOption(subOption.id)}
                        required
                      />
                    ))}
              </ProductOption>
            </RadioGroup>
          </>
        )}
      </ProductOptionsContainer>
      <Line color="#3434344D" />
      <ProductQuantity variationId={variationId} product={product} />
    </>
  );
}
