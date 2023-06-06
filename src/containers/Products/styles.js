import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh-72px);
`

export const ProductImg = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #9758A6'};
  color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#9a9a9a')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
