import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  min-width: 270px;
  max-height: 120px;
  border-top: 1px solid black;

  &:last-child {
    border-bottom: 1px solid black;
  }
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  width: 150px;
  margin: 0 1rem;

  img {
    display: block;
    max-height: 90%;
    max-width: 100%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const PriceContainer = styled.div`
  text-align: center;
  width: 20%;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  width: 5%;
  border: 1px solid black;

  button {
    border: none;
    width: 30%;
    background-color: orange;
    cursor: pointer;
  }
`;

export const removeContainer = styled.div`
  height: 20%;
  width: 5%;

  img {
    display: block;
    height: 30px;
    //max-width: 50%
  }
`;
