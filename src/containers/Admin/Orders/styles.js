import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const SelectStyle = styled(Select)`
  width: 250px;
  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0px;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${(props) =>
    props.isActiveStatus ? '2px solid #9758A6' : 'none'};
  padding-bottom: 10px;
`
