import { Col, Container } from '@/app/[locale]/components/Grids'
import { Grid } from '@mantine/core'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import WishlistProducts from '../WishlistProducts'
import { WishlistPageWrapper } from './style'
import { useRouter } from "next/navigation";
import cache from '@mongez/cache'

const WishlistPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!cache.get("token")) {
      router.push("/auth?mode=login");
    }
  }, [router]);
  return (
    <WishlistPageWrapper>
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
    </WishlistPageWrapper>
  )
}

export default WishlistPage