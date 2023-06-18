import React from 'react'

import PropTypes from 'prop-types'
import { ErrorMensageStyles } from './styles'

export function ErrorMensage({ children }) {
  return <ErrorMensageStyles>{children}</ErrorMensageStyles>
}

ErrorMensage.propTypes = {
  children: PropTypes.string
}
