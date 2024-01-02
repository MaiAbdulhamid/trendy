import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React from 'react'
import Sidebar from '../Sidebar'
import { PageWrapper } from './style'
import Form from '../Form'

const ProfilePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Grid>
          <Col span={{ base: 12, md: 3 }}>
            <Sidebar />
          </Col>
          <Col span={{ base: 12, md: 9 }}>
            <Form />
          </Col>
        </Grid>
      </Container>
    </PageWrapper>
  )
}

export default ProfilePage;