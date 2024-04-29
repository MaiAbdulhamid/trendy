import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React from 'react'
import Sidebar from '../Sidebar'
import WishlistProducts from '../WalletProducts'
import { WalletPageWrapper } from './style'

const WalletPage = () => {
  return (
    <WalletPageWrapper>
      <Container>
        <Grid>
          <Col span={{ base: 12, md: 3 }}>
            <Sidebar />
          </Col>
          <Col span={{ base: 12, md: 9 }}>
            <WishlistProducts />
          </Col>
        </Grid>
      </Container>
    </WalletPageWrapper>
  )
}

export default WalletPage