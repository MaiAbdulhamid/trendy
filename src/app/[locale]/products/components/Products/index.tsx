import { Col } from '@/app/[locale]/components/Grids'
import ProductCard from '@/app/[locale]/components/ProductCard'
import { Grid } from '@mantine/core'
import React from 'react'

const Products = ({record} : any) => {
  return (
    <Grid>
      {record.map((product : any) => (
        <Col span={4} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Grid>
  )
}

export default Products