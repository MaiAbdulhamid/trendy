import React from 'react'
import { Container, Flex } from '../Grids'
import { FooterWrapper } from './style'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import URLS from '../../utils/urls'
import theme from '../../utils/theme'
import { H2, H3, P4 } from '../Typography'
import SocialMedia from './SocialMedia'
import MobileApps from './MobileApps'
import Copyright from './Copyright'

const Footer = () => {
  const trans = useTranslations('Layout');
  const aboutLinks = [
    {
      id: "l1",
      url: URLS.about,
      text: trans("whoAreWe"),
    },
    {
      id: "l2",
      url: URLS.privacyPolicy,
      text: trans("privacyPolicy"),
    },
    {
      id: "l3",
      url: URLS.returnPolicy,
      text: trans("returnPolicy"),
    },
    {
      id: "l4",
      url: URLS.termsAndConditions,
      text: trans("termsAndConditions"),
    },
  ]
  const contactLinks = [
    {
      id: "lc1",
      url: URLS.contactUs,
      text: trans("contactUs"),
    },
    {
      id: "lc3",
      url: URLS.faq,
      text: trans("faq"),
    },
    // {
    //   id: "lc4",
    //   url: URLS.country,
    //   text: trans("country"),
    // },
  ]

  return (
    <Container>
      <FooterWrapper>
        <Flex justify='space-between' fullWidth>
          <Flex direction='column'>
            <H2 uppercase color={theme.colors.white}>{trans('about')}</H2>
            {aboutLinks.map((link: any) => (
              <Link key={link.id} href={link.url}>
                <P4 weight='100' color={theme.colors.white} >{link.text}</P4>
              </Link>
            ))}
          </Flex>
          <Flex direction='column' justify='end'>
            {contactLinks.map((link: any) => (
              <Link key={link.id} href={link.url}>
                <P4 weight='100' color={theme.colors.white} >{link.text}</P4>
              </Link>
            ))}
          </Flex>
          <Flex direction='column' justify='center'>
            <H3 uppercase color={theme.colors.white}>{trans('connectWithUs')}</H3>
            <SocialMedia />
            <MobileApps />
          </Flex>
        </Flex>
      </FooterWrapper>
      <Copyright />
    </Container>
  )
}

export default Footer