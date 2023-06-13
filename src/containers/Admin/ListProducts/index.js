import React, { useEffect, useState } from 'react'

import { Container, Img, EditIconStyles } from './styles'
import api from '../../../services/api'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import formatCurrency from '../../../utils/formatCurrency'

function ListProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadProducts()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: 'darkgreen' }} />
    }
    return <NotInterestedIcon style={{ color: 'darkred' }} />
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Oferta</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{isOffer(product.offer)}</TableCell>
                <TableCell>
                  <Img src={product.url} alt="imagem produto" />
                </TableCell>
                <TableCell>
                  <EditIconStyles />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
