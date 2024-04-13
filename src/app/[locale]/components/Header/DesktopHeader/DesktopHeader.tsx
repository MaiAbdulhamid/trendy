"use client"
import React from 'react'
import { TopNav } from '../TopNav'
import { Container } from '../../Grids'
import { Nav } from '../Nav'

const DesktopHeader = () => {
  return (
    <Container>
      <TopNav />
      <Nav />
    </Container>
  )
}

export default DesktopHeader