import React from 'react'

import CartLogo from '../../assets/ImageCart.svg'
import { CartItens, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
