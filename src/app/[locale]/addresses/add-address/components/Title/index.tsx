import { Flex } from '@/app/[locale]/components/Grids'
import { H4, P4 } from '@/app/[locale]/components/Typography'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Badge } from './style'

const Title = () => {
  const trans = useTranslations('Addresses')
  return (
    <Flex direction='column' fullWidth>
      <H4>{trans('addAddress')}</H4>
      <Badge>
        <P4>{trans("addAddressHint")}</P4>
      </Badge>
    </Flex>
  )
}

export default Title