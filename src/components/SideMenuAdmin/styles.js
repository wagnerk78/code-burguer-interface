import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 60px 15px;
  }
`

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
`

export const ItemContainer = styled.div`
  height: 60px;
  align-items: center;
  display: flex;
  background: ${(props) => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: white;
  }
`
