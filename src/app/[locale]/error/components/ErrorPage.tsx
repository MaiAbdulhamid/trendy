import React from 'react'
import { Flex } from '../../components/Grids'
import { ErrorIcon } from '../../assets/svgs'
import { H2 } from '../../components/Typography'
import { useTranslations } from 'next-intl'

const ErrorPage = () => {
  const trans = useTranslations('Error')
  return (
    <Flex direction='column' align='center' justify='center' fullWidth gap="2rem">
      <ErrorIcon />
      <H2>{trans("someThingWrong")}</H2>
    </Flex>
  )
}

export default ErrorPage