import styled from 'styled-components';

export const BookContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 40vh;
  margin: 1rem;
`;

export const CoverContainer = styled.div`
  max-height: 100%;
  width: 40%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  text-align: center;

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: .9rem;
  }

  h3 {
    font-size: .8rem;
  }

  button {
    width: 50%;
    height: 50px;
  }
`;
