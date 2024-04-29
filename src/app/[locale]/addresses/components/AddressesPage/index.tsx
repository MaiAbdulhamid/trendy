import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React from 'react'
import Sidebar from '../Sidebar'
import { PageWrapper } from './style'
import UserAddresses from '../UserAddresses'

const AddressesPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Grid>
          <Col span={{ base: 12, md: 3 }}>
            <Sidebar />
          </Col>
          <Col span={{ base: 12, md: 9 }}>
            <UserAddresses />
          </Col>
        </Grid>
      </Container>
    </PageWrapper>
  )
}

export default AddressesPage