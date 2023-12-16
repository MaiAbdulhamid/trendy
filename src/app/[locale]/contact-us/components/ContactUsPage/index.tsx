import { Container } from '@/app/[locale]/components/Grids'
import React from 'react'
import Header from '../Header'
import { ContactUsPageWrapper } from './style'
import Form from '../Form'
import SocialMedia from '../SocialMedia'

const ContactUsPage = () => {
  return (
    <ContactUsPageWrapper>
      <Container>
        <Header />
        <Form />
        <SocialMedia />
      </Container>
    </ContactUsPageWrapper>
  )
}

export default ContactUsPage