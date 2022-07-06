import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  min-width: 270px;
  max-height: 50px;
  color: ${Colors.primaryBackground};
`;

export const CoverLabel = styled.div`
  width: 150px;
  height: 20px;
  margin: 0 1rem;
`;

export const InformationLabel = styled.div`
  width: 35%;
`

export const PriceLabel = styled.div`
  width: 20%;
  text-align: center;
`

export const QuantityLabel = styled.div`
  width: 5%;
  text-align: center;
`

export const PriceSumLabel = styled.div`
  width: 20%;
  text-align: center;
`

export const removeContainer = styled.div`
  height: 20%;
  width: 5%;
`;