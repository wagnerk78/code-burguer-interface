import React from 'react'
// import Orders from './Orders'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
