import { useFormControl } from "@mongez/react-form";
import { StyledRangeSlider } from "../styles";
import { P4 } from "../../Typography";
import { getCookie } from "cookies-next";
import { useCallback, useEffect, useState } from "react";

const RangeSlider = (props: any) => {
  const { value, changeValue, otherProps } = useFormControl(props);
  const [currency, setCurrency] = useState("");

  const getUserCurrency = useCallback((): string => {
    const response: any = getCookie("country_object");
    return response ? JSON.parse(response).currency_en : "";
  }, []);

  useEffect(() => {
    setCurrency(getUserCurrency());
  }, [getUserCurrency]);
  return (
    <div style={{ width: "100%" }}>
      <StyledRangeSlider
        min={props.min}
        max={props.max}
        step={1}
        onChange={changeValue}
        value={value}
        {...otherProps}
        marks={[
          {
            value: props.min,
            label: (
              <P4>
                {props.min} {currency}
              </P4>
            ),
          },
          {
            value: props.max,
            label: (
              <P4>
                {props.max} {currency}
              </P4>
            ),
          },
        ]}
      />
    </div>
  );
};

export default RangeSlider;
