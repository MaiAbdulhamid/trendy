'use client';

import { Grid } from "@mantine/core";

const Col = ({children, ...props}: any) => {
  return (
    <Grid.Col {...props}>{children}</Grid.Col>
  )
}

export default Col