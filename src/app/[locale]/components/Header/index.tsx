"use client"
import React from 'react'
import { TopNav } from './TopNav'
import { Container } from '../Grids'
import { Nav } from './Nav'

const Header = () => {
  return (
    <Container>
      <TopNav />
      <Nav />
    </Container>
  )
}

export default Header