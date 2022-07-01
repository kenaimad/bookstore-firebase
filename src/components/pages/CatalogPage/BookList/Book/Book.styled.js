import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 30vh;
  width: 30%;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const CoverContainer = styled.div`
  height: 100%;
  max-width: 40%;

  img {
    height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
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
