import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'label-tax price-tax';

    .title {
      grid-area: title;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .label-tax {
      grid-area: label-tax;
    }

    .price-tax {
      grid-area: price-tax;
    }
  }

  .container-bottom {
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
  }
`
