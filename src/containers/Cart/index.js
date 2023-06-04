import React from 'react'

import CartLogo from '../../assets/ImageCart.svg'
import { CartItens } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <CartItens />
    </Container>
  )
}
