import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React from 'react'
import Sidebar from '../Sidebar'
import { PageWrapper } from './style'
import UserOrders from '../UserOrders'

const OrdersPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Grid>
          <Col span={{ base: 12, md: 3 }}>
            <Sidebar />
          </Col>
          <Col span={{ base: 12, md: 9 }}>
            <UserOrders />
          </Col>
        </Grid>
      </Container>
    </PageWrapper>
  )
}

export default OrdersPage;