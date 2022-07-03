import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 250px;
  height: 40vh;
  margin: 1rem;

  @media (max-width: 1080px) {
    width: 30%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

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

