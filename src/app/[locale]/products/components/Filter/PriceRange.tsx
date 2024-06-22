import RangeSlider from "@/app/[locale]/components/Form/RangeSlider";
import { Flex } from "@/app/[locale]/components/Grids";
import React, { useEffect, useState } from "react";

const PriceRange = ({ minPrice, maxPrice, onChange }: any) => {
  // const [defaultValue, setDefaultValue] = useState([minPrice, maxPrice]);

  return (
    <Flex fullWidth>
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        onChange={onChange}
        name="price"
        defaultValue={[minPrice, maxPrice]}
      />
    </Flex>
  );
};

export default PriceRange;
