import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React, { useCallback, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { PageWrapper } from './style'
import Form from '../Form'
import cache from '@mongez/cache'
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!cache.get("token")) {
      router.push("/auth?mode=login");
    }
  }, [router]);
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