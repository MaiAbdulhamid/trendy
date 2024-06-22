import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "../Grids";
import theme from "../../utils/theme";
import devices from "../../utils/devices";
import { Select, Input, Textarea } from "@mantine/core";
import { RangeSlider } from "@mantine/core";

type Types = any & {
  error?: boolean;
  variant?: "filled" | "outlined";
  dashed?: boolean;
  inputProps?: any;
  noStyle?: boolean;
  bg?: boolean;
};

export const WrapperInput = styled(Flex)<Types>`
  width: 100%;
  input {
    border-color: ${({ error }) => error && theme.colors.error[100]};
  }
`;
export const AutoCompleteWrapper = styled.div`
  .mantine-Autocomplete-input {
    min-width: 539px;
    ${devices.mediumMax} {
      min-width: auto;
    }
    height: 45px;
    background: transparent;
  }
`;
export const Wrapper = styled(Flex)`
  label: input-wrapper;
  position: relative;
  height: ${({ height }) => height || "50px"};
  width: 100%;
  border: 1px solid #34343433;
  border-radius: 10px;
  padding: 0 10px;
  align-items: center;
  gap: 0.5rem;
  .mantine-Select-root,
  .mantine-Select-wrapper {
    width: 100%;
  }
  input {
    width: 100%;
  }
`;
export const CheckboxWrapper = styled(Flex)`
  label: Checkbox-wrapper;
  margin: 0.5rem 0;
  .mantine-Checkbox-body {
    align-items: center;
  }

  .mantine-Checkbox-input {
    &:checked {
      background-color: ${theme.colors.primaryColor};
    }
    color: ${theme.colors.primaryColor};
    border-color: ${theme.colors.primaryColor};
  }
`;
export const StyledTextarea = styled(Textarea)``;
export const StyledInput = styled(Input)<any>`
  height: 100%;
  flex: 1;
  padding: 0;
  text-align: start;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  padding: 0 10px;
  opacity: 0.7;
  input {
    border: 0;
    height: 100%;
    &:focus,
    &:focus-visible,
    &:active,
    &::focus-within {
      --_input-bd: none;
      outline: none;
    }
  }
  &::placeholder {
    color: ${theme.colors.black[300]};
    font-weight: 300;
    opacity: 0.7;
    font-size: 16px;
  }
  ${devices.large} {
    font-size: 18px;
    padding: 0;
  }
`;
export const DateWrapper = styled.div<Types>`
  label: date-input;
  width: 100%;
  .mantine-DateInput-input {
    border: none;
  }
`;
export const StyledSelectInput = styled(Select)<Types>`
  label: select-input;
  input {
    border: 0;
    height: 100%;
    width: 100%;
  }
`;

export const StyledTextArea = styled("textarea")<Types>`
  height: 100%;
  flex: 1;
  padding: 8px;
  flex: 1;
  height: 100%;
  background: transparent;
  overflow-y: auto;
  resize: none;
  text-align: start;
  border: none;
  outline: none;
  font-family: inherit;
  ${({ error }) => css`
    color: ${error ? theme.colors.error[200] : theme.colors.black};
  `}
  /* font styles */
  font-size: 16px;
  &::placeholder {
    font-weight: normal;
  }
  ${devices.large} {
    font-size: 18px;
    padding: 14px;
  }
`;
export const StyledRangeSlider = styled(RangeSlider)`
  .mantine-Slider-track::before {
    border-radius: 0;
  }
  .mantine-Slider-bar {
    background-color: ${theme.colors.primaryColor};
  }
  .mantine-Slider-thumb {
    background-color: ${theme.colors.primaryColor};
    border-color: transparent;
    width: 22px;
    height: 22px;
  }
  .mantine-Slider-track {
    height: 5px;
  }
  .mantine-Slider-markLabel {
    color: ${theme.colors.primaryColor};
    position: absolute;
    /* top: -45px; */
  }
  .mantine-Slider-label {
    /* display: none; */
    background-color: transparent;
    color: ${theme.colors.primaryColor};
  }
`;
export const CountryIconWrapper = styled.div`
  > div {
    width: 120px;
  }
  .select-input-wrapper {
    /* width: 50%; */
    .input-wrapper {
      > div {
        border: 0;
      }
    }
  }
  input::placeholder {
    color: blue;
  }
`;
