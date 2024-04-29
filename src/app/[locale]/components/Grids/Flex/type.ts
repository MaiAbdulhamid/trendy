import CSS from "csstype";
import React from "react";
export type StyledFlexWrapper = Omit<FlexPropsType, "children" | "as">;

export type FlexPropsType = {
  children: React.ReactNode;
  width?: CSS.Property.Width;
  basis?: string;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  flex?: CSS.Property.Flex;
  fullWidth?: boolean;
  fullHeight?: boolean;
  persistentGap?: boolean;
  className?: string;
  as?: React.ElementType;
  m?: string | number;
};
