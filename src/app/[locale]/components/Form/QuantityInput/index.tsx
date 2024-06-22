import { ActionIcon, NumberInput, NumberInputHandlers } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { QuantityInputContainer } from "./style";
import { QuantityInputProps } from "./type";
import { MinusIcon, PlusIcon } from "@/app/[locale]/assets/svgs";

export default function QuantityInput({
  onChange,
  max,
  min,
  defaultValue,
  style,
  setShowCart, // Add this prop
}: QuantityInputProps) {
  const [value, setValue] = useState<number>(defaultValue ?? 1);

  useEffect(() => {
    setValue(defaultValue ?? 1);
  }, [defaultValue]);

  const handlers = useRef<NumberInputHandlers>(null);

  const increment = () => {
    const newValue = Math.min(value + 1, max ?? Infinity);
    setValue(newValue);
    onChange(newValue);
    if (newValue === 0) setShowCart?.(true);
  };

  const decrement = () => {
    const newValue = Math.max(value - 1, min ?? -Infinity);
    setValue(newValue);
    onChange(newValue);
    if (newValue === 0) setShowCart?.(true);
  };

  const changeValue = (val: string | number | undefined) => {
    let newValue = typeof val === "number" ? val : parseInt(val ?? "0", 10);
    newValue = Math.max(Math.min(newValue, max ?? Infinity), min ?? -Infinity);
    setValue(newValue);
    onChange(newValue);
    if (newValue === 0) setShowCart?.(true);
  };

  return (
    <QuantityInputContainer
      align="center"
      className="quantity--input--container"
      style={style}
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
