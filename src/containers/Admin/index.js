import React from 'react'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import PropTypes from 'prop-types'
import paths from '../../constants/paths'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
