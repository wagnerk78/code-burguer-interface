import React from 'react'

import Cart from '../../assets/cart-image.svg'
import Person from '../../assets/user-image.svg'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  PageLinkExit
} from './styles'
import { useHistory } from 'react-router-dom'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="imagem carrinho" />
        </PageLink>
        <div className="line"></div>
        <PageLink>
          <img src={Person} alt="imagem usuário" />
        </PageLink>
        <ContainerText>
          <p>Olá, Rodolfo</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
