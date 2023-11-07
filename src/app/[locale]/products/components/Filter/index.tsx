import React, { useCallback, useState } from "react";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { ArrowDownIcon, ArrowLeftIcon } from "../../../assets/svgs";
import CheckboxInput from "../../../components/Form/CheckboxInput";
import Button from "../../../components/Button/Button";
import theme from "../../../utils/theme";
import MultiRangeSlider from "multi-range-slider-react";
import { MultiRangeSliderWrapper } from "../style";
import { productsActions } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import URLS from "@/app/[locale]/utils/urls";

const Filter = ({ filter }: any) => {
  const [openFilters, setOpenFilters] = useState<Boolean>(true);
  const [queryParams, setQueryParams] = useState<any>({query: ''});

  const router = useRouter();

  const onChangePrice = (e: any) => {
    // dispatch(
    //   productsActions.filter({
    //     type: "price",
    //     payload: {
    //       min: e.minValue,
    //       max: e.maxValue,
    //     },
    //   })
    // );

    // // const newProducts = filteredProducts.filter((product : any) => {
    // //   +product.price_after <= e.maxValue && +product.price_after >= e.minValue
    // // });

    // // console.log(newProducts)
    // console.log(products)

  };
  const onChangeFilters = (type: any, flag: any) => {
    console.log(type, flag)
    setQueryParams((prevState : any) => {
      return {
        ...prevState,
        query: `${type}[]=${flag}`
      }
    })
    router.push(`/?${type}[]=${flag}`)
  }
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
                <MultiRangeSlider
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
                  value={section.product_flag ?? section.id}
                  onChange={() => onChangeFilters(filter.type, section.product_flag ?? section.id)}
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
