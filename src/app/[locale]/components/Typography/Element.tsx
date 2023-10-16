import React from "react";
import { Text } from "./styles";
import { TypographyPropsType, weightType } from "./types";
import theme from "../../utils/theme";
import { useTranslations } from "next-intl";

const { typography } = theme;

const TextElement = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;

  return (
    <Text length={textLength} {...rest}>
      {children || trans(`${text}`)}
    </Text>
  );
};

export const H1 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h1 } = typography;
  return (
    <Text
      as="h1"
      length={textLength}
      fontSize={h1.sizes}
      weight={h1.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};
export const H2 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h2 } = typography;
  return (
    <Text
      as="h2"
      length={textLength}
      fontSize={h2.sizes}
      weight={h2.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};
export const H3 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h3 } = typography;
  return (
    <Text
      as="h3"
      length={textLength}
      fontSize={h3.sizes}
      weight={h3.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};
export const H4 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h4 } = typography;
  return (
    <Text
      as="h4"
      length={textLength}
      fontSize={h4.sizes}
      weight={h4.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const H5 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h5 } = typography;
  return (
    <Text
      as="h5"
      length={textLength}
      fontSize={h5.sizes}
      weight={h5.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const H6 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h6 } = typography;
  return (
    <Text
      as="h6"
      length={textLength}
      fontSize={h6.sizes}
      weight={h6.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const H7 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { h7 } = typography;
  return (
    <Text
      as="h6"
      length={textLength}
      fontSize={h7.sizes}
      weight={h7.weight as weightType}
      isHeader
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const P1 = ({ text, children, ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { p1 } = typography;
  return (
    <Text
      as="p"
      length={textLength}
      fontSize={p1.sizes}
      weight={p1.weight as weightType}
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};
export const P2 = ({ text, children,  ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { p2 } = typography;
  return (
    <Text
      as="p"
      length={textLength}
      fontSize={p2.sizes}
      weight={p2.weight as weightType}
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};
export const P3 = ({ text, children,  ...rest }: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { p3 } = typography;
  return (
    <Text
      as="p"
      length={textLength}
      fontSize={p3.sizes}
      weight={p3.weight as weightType}
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const P4 = ({
  text,
  children,
  textDecoration,
  ...rest
}: TypographyPropsType) => {
  const trans = useTranslations();
  const textLength = `${text}`.length;
  const { p4 } = typography;
  return (
    <Text
      as="p"
      length={textLength}
      fontSize={p4.sizes}
      weight={p4.weight as weightType}
      textDecoration={textDecoration}
      {...rest}
    >
      {children || trans(`${text}`)}
    </Text>
  );
};

export const Small = ({ text, children,  ...rest }: TypographyPropsType) => {
  const textLength = `${text}`.length;
  const { small } = typography;

  return (
    <Text
      as="small"
      length={textLength}
      fontSize={small.sizes}
      weight={small.weight as weightType}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default React.memo(TextElement);
