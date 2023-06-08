import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .line {
    height: 41px;
    border: 0.5px solid #bababa;
  }
`

export const PageLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#9758a6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
`
