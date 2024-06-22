import React, { useEffect, useState } from "react";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { ArrowDownIcon, ArrowLeftIcon } from "../../../assets/svgs";
import CheckboxInput from "../../../components/Form/CheckboxInput";
import Button from "../../../components/Button/Button";
import theme from "../../../utils/theme";
import cache from "@mongez/cache";
import { useTranslations } from "next-intl";

const Sort = ({ onChangeFilters }: any) => {
  const trans = useTranslations("Products");
  const [openFilters, setOpenFilters] = useState<Boolean>(true);

  const filter = [
    {
      type: "sort",
      label: trans("recommended"),
      value: 1,
      id: "sort1",
    },
    {
      type: "sort",
      label: trans("mostPopular"),
      value: 2,
      id: "sort2",
    },
    {
      type: "sort",
      label: trans("newArrival"),
      value: 3,
      id: "sort3",
    },
    {
      type: "sort",
      label: trans("priceLowToHigh"),
      value: 4,
      id: "sort4",
    },
    {
      type: "sort",
      label: trans("priceHighToLow"),
      value: 5,
      id: "sort5",
    },
    {
      type: "sort",
      label: trans("topRated"),
      value: 6,
      id: "sort6",
    },
  ];

  // useEffect(() => {
  //   cache.remove("filters");
  // }, []);

  return (
    <>
      <Flex fullWidth align="center" justify="space-between">
        <P4>{trans("sort")}</P4>
        <Button noStyle onClick={() => setOpenFilters(!openFilters)}>
          {openFilters ? (
            <ArrowDownIcon />
          ) : (
            <ArrowLeftIcon size={22} color={theme.colors.black[300]} />
          )}
        </Button>
      </Flex>
      <div>
        {filter.map((section: any) => {
          return (
            openFilters && (
              <Flex direction="column" fullWidth key={section.id}>
                <CheckboxInput
                  name={section.id}
                  label={section.label}
                  defaultChecked={false}
                  onChange={(value) =>
                    onChangeFilters(value, section.type, section.value)
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

export default Sort;
