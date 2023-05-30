import React from 'react'

import HomeLogo from '../../assets/image-logo.svg'

import { Container, HomeImg } from './styles'
import { OffersCarousel, CategoryCarousel } from '../../components'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
