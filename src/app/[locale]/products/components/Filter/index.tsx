import React, { useCallback, useState } from "react";
import theme from "../../../utils/theme";
import { MultiRangeSliderWrapper } from "../style";
import axiosInstance from "@/app/[locale]/lib/axios";
import cache from "@mongez/cache";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import Button from "@/app/[locale]/components/Button/Button";
import { ArrowDownIcon, ArrowLeftIcon } from "@/app/[locale]/assets/svgs";
import CheckboxInput from "@/app/[locale]/components/Form/CheckboxInput";
import PriceRange from "./PriceRange";
import { debounce } from "lodash";

const Filter = ({
  filter,
  onChangeFilters,
  setFilteredProducts,
  categoryId,
}: any) => {
  const [openFilters, setOpenFilters] = useState<Boolean>(true);

  const debouncedOnChangePrice = useCallback(
    debounce(async (min_price: number, max_price: number) => {
      console.log("Debounced:", min_price, max_price);
      let params = "";
      params += `&${new URLSearchParams(cache.get("filters")).toString()}`;
      try {
        const response: any = await axiosInstance.get(
          `products?${params}&max_price=${max_price}&min_price=${min_price}`
        );
        const data = response.data.data.data;
        setFilteredProducts(data);
        cache.set("filters", {
          ...cache.get("filters"),
          min_price: min_price,
          max_price: max_price,
        });
      } catch (error: any) {
        console.log(error);
      }
    }, 500), // 500ms debounce delay
    [setFilteredProducts]
  );

  const onChangePrice = (min_price: number, max_price: number) => {
    debouncedOnChangePrice(min_price, max_price);
  };

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
        {filter.section?.map((section: any) => {
          if (filter.type === "price") {
            return (
              <MultiRangeSliderWrapper key={section.id}>
                <PriceRange
                  minPrice={Number(section.min_price)}
                  maxPrice={Number(section.max_price)}
                  onChange={(e: any) => {
                    onChangePrice(Math.min(...e), Math.max(...e));
                  }}
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
