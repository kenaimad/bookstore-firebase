import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;

`;

export const InformationCaontainer = styled.div`
  text-align: center;
  h2 {
    color: ${Colors.fontBaseColor};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 110px;
    height: 50px;
    background-color: ${Colors.primaryBackground};
    border: none;
    cursor: pointer;
    color: white;

    &:hover {
      border: 1px solid ${Colors.primaryBackground};
      background-color: white;
      color: ${Colors.primaryBackground};
    }
  }
`;
