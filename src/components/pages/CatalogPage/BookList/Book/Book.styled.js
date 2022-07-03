import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  max-width: 350px;
  height: 40vh;
  margin: 1rem;

  h1 {
    font-size: .9rem;
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: .8rem;
  }

`;

export const Cover = styled.img`
  display: block;
  //max-width: 80%;
  max-height: 70%;
  width: auto;
  height: auto;
`

export const AddButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 5%;
  color: white;
  cursor: pointer;
  background-color: ${Colors.primaryBackground};

  &:hover {
    border: 1px solid ${Colors.primaryBackground};
    background-color: white;
    color: ${Colors.primaryBackground};
  }
  
`

