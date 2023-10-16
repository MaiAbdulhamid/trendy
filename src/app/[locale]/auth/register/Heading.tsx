import React from 'react'
import { H3 } from '../../components/Typography'
import { HeadingWrapper } from './style'

const Heading = () => {
  return (
    <HeadingWrapper>
      <H3 textAlign='center'>
        Create new account in <span>Trendy</span>
      </H3>
    </HeadingWrapper>
  )
}

export default Heading