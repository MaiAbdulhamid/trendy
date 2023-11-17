import { ActionIcon, NumberInput, NumberInputHandlers } from "@mantine/core";
// import MinusIcon from "assets/svgs/MinusIcon";
// import PlusIcon from "assets/svgs/PlusIcon";
import { useEffect, useRef, useState } from "react";
import { QuantityInputContainer } from "./style";
import { QuantityInputProps } from "./type";
import theme from "@/app/[locale]/utils/theme";
import { MinusIcon, PlusIcon } from "@/app/[locale]/assets/svgs";

export default function QuantityInput({
  onChange,
  max,
  min,
  defaultValue,
}: QuantityInputProps) {
  const [value, setValue] = useState<any>(defaultValue || 1);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handlers = useRef<NumberInputHandlers>();

  const increment = () => {
    handlers?.current?.increment();
  };

  const decrement = () => {
    handlers?.current?.decrement();
  };

  const changeValue = (val: any) => {
    setValue(val);

    onChange && onChange(val);
  };

  return (
    <QuantityInputContainer
      align="center"
      className="quantity--input--container"
    >
      <ActionIcon
        size={35}
        variant="default"
        onClick={decrement}
        radius={5}
        className="minus--button"
      >
        <MinusIcon />
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={changeValue}
        handlersRef={handlers}
        max={max}
        min={min}
        step={1}
        size="md"
        className="number-input"
      />
      <ActionIcon
        size={35}
        variant="default"
        onClick={increment}
        radius={5}
        className="plus--button"
      >
        <PlusIcon />
      </ActionIcon>
    </QuantityInputContainer>
  );
}
