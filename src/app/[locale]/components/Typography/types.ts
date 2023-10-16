import { Property } from "csstype";
import React from "react";

export type weightType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "700"
  | "800"
  | "bold";
export type ResponsiveSettings = {
  xs: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  hd?: string;
};
export type FontSizeType = ResponsiveSettings | Property.FontSize;

export type HoverType = {
  decoration?: Property.TextDecoration;
  color?: Property.Color;
  fontWeight?: Property.FontWeight;
};

export type TypographyPropsType = {
  text?: string | number;
  children?: React.ReactNode;
  fontSize?: FontSizeType;
  fontFamily?: Property.FontFamily;
  weight?: weightType;
  color?: Property.Color;
  textDecoration?: Property.TextDecoration;
  textAlign?: Property.TextAlign;
  lineHeight?: Property.LineHeight;
  isHeader?: boolean;
  direction?: Property.Direction;
  truncationWidth?: Property.Width;
  capitalizeFirstLetter?: boolean;
  startAdornment?: string;
  className?: string;
  endAdornment?: string;
  hover?: HoverType;
  as?: React.ElementType;
};

export type StyledTextType = Omit<
  TypographyPropsType,
  "text" | "as" | "className"
> & {
  length?: number;
};
