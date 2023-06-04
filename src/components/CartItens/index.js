import React from 'react'

import { Container, Header, Body } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'

export function CartItens() {
  const { cartProducts } = useCart()
  console.log(cartProducts)
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts &&
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.price * product.quantity)}</p>
          </Body>
        ))}
    </Container>
  )
}
