import React from 'react'
import { CopyrightWrapper } from './style'
import { useTranslations } from 'next-intl'
import { P4 } from '../Typography'

const Copyright = () => {
  const trans = useTranslations('Layout')
  return (
    <CopyrightWrapper>
      <P4>
        {trans('copyright')}
      </P4>
    </CopyrightWrapper>
  )
}

export default Copyright