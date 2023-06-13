import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ListAltIcon from '@mui/icons-material/ListAlt'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Products,
    icon: ListAltIcon
  }
]

export default listLinks
