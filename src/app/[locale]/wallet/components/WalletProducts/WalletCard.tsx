import React from 'react'
import { WalletCardWrapper } from './style'
import { Flex } from '@/app/[locale]/components/Grids'
import { P4 } from '@/app/[locale]/components/Typography'
import theme from '@/app/[locale]/utils/theme'

const WalletCard = ({wallet}: any) => {
  console.log(wallet)
  return (
    <WalletCardWrapper backgroundColor={wallet.color}>
      <Flex justify='space-between' fullWidth>
        <P4 color={theme.colors.white} >{wallet.text}</P4>
        <img src={wallet.image} />
      </Flex>
    </WalletCardWrapper>
  )
}

export default WalletCard