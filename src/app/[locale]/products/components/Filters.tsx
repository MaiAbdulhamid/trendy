import React, { useEffect, useState } from "react";
import { Flex } from "../../components/Grids";
import axiosInstance from "../../lib/axios";
import { FiltersWrapper } from "./style";
import Filter from "./Filter";
import Sort from "./Sort";
import cache from "@mongez/cache";

const Filters = ({ getProductsFilters, setFilteredProducts }: any) => {
  const [filters, setFilters] = useState<any>([]);

  const fetchFilters = async () => {
    try {
      const response: any = await axiosInstance.get("filter");
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
      cache.set("filters", [
        ...cache.get("filters", []),
        {
          [preparedType]: preparedFlag,
        },
      ]);
    } else {
      const filtered = cache
        .get("filters", [])
        .filter((item: any) => item[preparedType] !== preparedFlag);
      cache.set("filters", filtered);
    }
    getProductsFilters(cache.get("filters", []));
  };

  useEffect(() => {
    fetchFilters();
  }, []);

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
            />
          );
        })}
      </Flex>
    </FiltersWrapper>
  );
};

export default Filters;
