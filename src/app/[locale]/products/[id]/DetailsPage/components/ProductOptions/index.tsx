import Is from "@mongez/supportive-is";
import { ProductOption, ProductOptionsContainer } from "./style";
import { H6, H7 } from "@/app/[locale]/components/Typography";
import Radio, { RadioGroup } from "@/app/[locale]/components/Form/Radio";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import ColorRadio from "@/app/[locale]/components/Form/ColorRadio";
import { useEffect, useState } from "react";
import variationsAtom, { allVariationsAtom } from "../../atoms";

export default function ProductOptions({ product }: any) {
  const { main_variations } = product;
  const mainVariationsAtom = allVariationsAtom.useValue().allVariations;

  const [subVariation, setSubVariation] = useState<any>();
  const [variationId, setVariationId] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  useEffect(() => {
    allVariationsAtom.update({
      allVariations: main_variations,
    });
  }, [main_variations]);

  useEffect(() => {
    variationsAtom.update({
      variationId: variationId,
      option: selectedOption,
    });
  }, [variationId, selectedOption]);

  const chooseOption = (option: any, optionId: number) => {
    setVariationId(optionId);
    setSelectedOption(option);

    const subVariations = mainVariationsAtom.variations.find(
      (variation: any) => variation.id === optionId
    )?.sub_variations;

    setSubVariation(subVariations);
  };

  const chooseSubOption = (optionId: number) => {
    variationsAtom.update({
      variationId: optionId,
      option: selectedOption,
    });
  };

  if (Is.empty(mainVariationsAtom)) return null;

  return (
    <>
      <ProductOptionsContainer>
        <H7>{mainVariationsAtom.name}</H7>
        <RadioGroup>
          <ProductOption>
            {mainVariationsAtom.type === 1 || mainVariationsAtom.type === 3
              ? mainVariationsAtom.variations.map((option: any) => (
                  <Radio
                    key={option.id}
                    name="option"
                    value={String(option.id)}
                    label={<H6>{option.name}</H6>}
                    disabled={option.stock === 0}
                    onChange={(e) => chooseOption(option, option.id)}
                    required
                  />
                ))
              : mainVariationsAtom.variations.map((option: any) => (
                  <ColorRadio
                    key={option.id}
                    name="option"
                    value={String(option.id)}
                    disabled={option.stock === 0}
                    color={option.color}
                    onChange={(e) => chooseOption(option, option.id)}
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
                {subVariation.type === 1 || mainVariationsAtom.type === 3
                  ? subVariation.sub_sub_variations.map((subOption: any) => (
                      <Radio
                        key={subOption.id}
                        name="sub_option"
                        value={String(subOption.id)}
                        label={<H6>{subOption.name}</H6>}
                        disabled={subOption.stock === 0}
                        onClick={() => chooseSubOption(subOption.id)}
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
                        onClick={() => chooseSubOption(subOption.id)}
                        required
                      />
                    ))}
              </ProductOption>
            </RadioGroup>
          </>
        )}
      </ProductOptionsContainer>
      <Line color="#3434344D" />
    </>
  );
}
