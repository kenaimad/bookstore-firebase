import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 270px;
  //max-height: 120px;
  border-top: 1px solid ${Colors.primaryBackground};

  &:last-child {
    border-bottom: 1px solid ${Colors.primaryBackground};
  }

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1rem;
      font-weight: bold;
    }

    h2 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 10%;
  //margin-left: 1rem;

  img {
    display: block;
    max-height: 90%;
    max-width: 100%;
  }

  @media (max-width: 1000px) {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PriceContainer = styled.div`
  text-align: center;
  width: 20%;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    //margin: 1rem;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  width: 5%;
  min-width: 50px;
  border: 1px solid black;

  button {
    border: none;
    width: 30%;
    background-color: ${Colors.primaryBackground};
    cursor: pointer;
  }

  @media (max-width: 900px) {
    //margin: 1rem;
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

  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;


export const MobileLabel = styled.span`
    @media (min-width: 600px) {
    display: none;
  }
`