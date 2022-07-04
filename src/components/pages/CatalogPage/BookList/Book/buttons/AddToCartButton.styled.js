import styled from 'styled-components';
import { Colors } from '../../../../../../utils/Colors';

export const AddToCartContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
  width: 110px;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${Colors.primaryBackground};
  text-align: center;

  &:hover {
    border: 1px solid ${Colors.primaryBackground};
    background-color: white;
    color: ${Colors.primaryBackground};
  }
`;

export const CartIcon = styled.img`
  object-fit: contain;
  width: 15px;
  margin-left: .5rem;
`;
