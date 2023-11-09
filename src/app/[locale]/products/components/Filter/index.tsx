import React, { useCallback, useEffect, useState } from "react";
import theme from "../../../utils/theme";
import { MultiRangeSliderWrapper } from "../style";
import axiosInstance from "@/app/[locale]/lib/axios";
import cache from "@mongez/cache";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import Button from "@/app/[locale]/components/Button/Button";
import { ArrowDownIcon, ArrowLeftIcon } from "@/app/[locale]/assets/svgs";
import CheckboxInput from "@/app/[locale]/components/Form/CheckboxInput";
import MultiRangeSlider from "@/app/[locale]/components/Form/MultiRangeSlider";

const Filter = ({ filter, onChangeFilters, setFilteredProducts }: any) => {
  const [openFilters, setOpenFilters] = useState<Boolean>(true);

  const onChangePrice = async (e: any, min_price : number, max_price: number) => {
    if(e.max !== max_price || e.min !== min_price){
      try {
        const response: any = await axiosInstance.get(`products?max_price=${e.max}&min_price=${e.min}`);
        const data = response.data.data.data;
        setFilteredProducts(data);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    cache.remove("filters");
  }, []);

  return (
    <>
      <Flex fullWidth align="center" justify="space-between">
        <P4>{filter.name}</P4>
        <Button noStyle onClick={() => setOpenFilters(!openFilters)}>
          {openFilters ? (
            <ArrowDownIcon />
          ) : (
            <ArrowLeftIcon size={22} color={theme.colors.black[300]} />
          )}
        </Button>
      </Flex>
      <div>
        {filter.section.map((section: any) => {
          if (filter.type === "price") {
            return (
              <MultiRangeSliderWrapper key={section.id}>
                {/* <MultiRangeSlider
                  min={section.min_price}
                  max={section.max_price}
                  step={5}
                  ruler={false}
                  onChange={(e: any) => {
                    onChangePrice(e);
                  }}
                  thumbLeftColor={theme.colors.primaryColor}
                  thumbRightColor={theme.colors.primaryColor}
                  barLeftColor="#D9D9D9"
                  barRightColor="#D9D9D9"
                  barInnerColor={theme.colors.primaryColor}
                /> */}
                <MultiRangeSlider
                  onChange={(e: any) => onChangePrice(e, section.min_price, section.max_price)}
                  min={section.min_price}
                  max={section.max_price}
                />
              </MultiRangeSliderWrapper>
            );
          }
          return (
            openFilters && (
              <Flex direction="column" fullWidth key={section.id}>
                <CheckboxInput
                  name={section.product_flag ?? section.id}
                  label={section.item}
                  defaultChecked={false}
                  onChange={(value) =>
                    onChangeFilters(
                      value,
                      filter.type,
                      section.product_flag ?? section.id
                    )
                  }
                />
              </Flex>
            )
          );
        })}
      </div>
    </>
  );
};

export default Filter;
