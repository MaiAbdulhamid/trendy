import React, { useEffect, useState } from "react";
import { Flex } from "../../components/Grids";
import axiosInstance from "../../lib/axios";
import { FiltersWrapper } from "./style";
import Filter from "./Filter";
import { productsActions } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
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

  useEffect(() => {
    fetchFilters();
  }, [setFilters]);

  return (
    <FiltersWrapper>
      <Flex direction="column" fullWidth gap="1rem">
        {filters.map((filter: any) => {
          return (
            <Filter
              filter={filter}
            />
          );
        })}
      </Flex>
    </FiltersWrapper>
  );
};

export default Filters;
