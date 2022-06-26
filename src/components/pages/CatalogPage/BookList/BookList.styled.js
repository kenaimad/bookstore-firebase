import styled from 'styled-components';

export const BooksList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;