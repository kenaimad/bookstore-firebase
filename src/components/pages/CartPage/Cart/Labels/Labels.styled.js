import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 270px;
  max-height: 50px;
  color: ${Colors.primaryBackground};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CoverLabel = styled.div`
  width: 10%;
  height: 20px;
  //margin-left: 1rem;

  @media (max-width: 1000px) {
    margin-right: 1rem;
  }
`;

export const InformationLabel = styled.div`
  width: 35%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PriceLabel = styled.div`
  width: 20%;
  text-align: center;
  //text-align: center;
`;

export const QuantityLabel = styled.div`
  width: 5%;
  text-align: center;
`;

export const PriceSumLabel = styled.div`
  width: 20%;
  text-align: center;
`;

export const removeContainer = styled.div`
  height: 20%;
  width: 5%;
`;
