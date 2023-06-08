import React from 'react'
import { useUser } from '../../hooks/UserContext'
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
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
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
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
