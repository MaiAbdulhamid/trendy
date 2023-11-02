import React from 'react'
import { Flex } from '../Grids'
import { AppStoreIcon, GooglePlayIcon } from '../../assets/svgs'
import Link from 'next/link'

const MobileApps = () => {
  return (
    <Flex gap="1rem" align='center'>
      <a href='https://play.google.com/store/apps/details?id=com.trendy.trendy' target='_blank'>
        <GooglePlayIcon />
      </a>
      <a href='https://apps.apple.com/eg/app/trendy/id6464413316' target='_blank'>
        <AppStoreIcon />
      </a>
    </Flex>
  )
}

export default MobileApps