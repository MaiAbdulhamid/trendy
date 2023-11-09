import { Col, Flex } from "@/app/[locale]/components/Grids";
import ProductCard from "@/app/[locale]/components/ProductCard";
import { P4 } from "@/app/[locale]/components/Typography";
import { Grid } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { useTranslations } from "next-intl";
import React from "react";
import { ProductsWrapper } from "../style";

const Products = ({ record }: any) => {
  const trans = useTranslations("Products");

  return (
    <ProductsWrapper>
      {Is.empty(record) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <Grid>
          {record.map((product: any) => (
            <Col span={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Grid>
      )}
    </ProductsWrapper>
  );
};

export default Products;
