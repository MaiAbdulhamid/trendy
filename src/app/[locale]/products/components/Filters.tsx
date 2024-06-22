import React, { useCallback, useEffect, useState } from "react";
import { Flex } from "../../components/Grids";
import axiosInstance from "../../lib/axios";
import { FiltersWrapper } from "./style";
import Filter from "./Filter";
import Sort from "./Sort";
import cache from "@mongez/cache";

const Filters = ({
  getProductsFilters,
  setFilteredProducts,
  categoryId,
  filterId,
}: any) => {
  const [filters, setFilters] = useState<any>([]);

  const fetchFilters = async () => {
    let params = "";
    params += `&${new URLSearchParams(filterId).toString()}`;
    try {
      const response: any = await axiosInstance.get(`filter?${params}`);
      const data = response.data.data.data;
      setFilters(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const onChangeFilters = (
    value: React.FormEvent,
    type: string,
    flag: string
  ) => {
    const preparedFlag = type === "delivery" ? 1 : flag;
    const preparedType = type === "sort" ? type : `${type}[]`;

    if (value) {
      cache.set("filters", {
        ...cache.get("filters"),
        "category_id[]": categoryId,
        [preparedType]: preparedFlag,
      });
    } else {
      const filters = cache.get("filters", {});

      const filteredFilters = Object.fromEntries(
        Object.entries(filters).filter(([key, value]: any) => {
          return value !== preparedFlag;
        })
      );
      cache.set("filters", filteredFilters);
    }
    getProductsFilters(cache.get("filters", []));
  };

  useEffect(() => {
    fetchFilters();
  }, [filterId]);

  return (
    <FiltersWrapper>
      <Flex direction="column" fullWidth gap="1rem">
        <Sort onChangeFilters={onChangeFilters} />
        {filters.map((filter: any) => {
          return (
            <Filter
              key={filter.id}
              filter={filter}
              onChangeFilters={onChangeFilters}
              setFilteredProducts={setFilteredProducts}
              categoryId={categoryId}
            />
          );
        })}
      </Flex>
    </FiltersWrapper>
  );
};

export default Filters;
