import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyle from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Register />
    <GlobalStyle />
  </>
)