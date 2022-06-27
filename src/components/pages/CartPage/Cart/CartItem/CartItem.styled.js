import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  min-width: 270px;
  max-height: 200px;
  margin: 1rem;
  align-self: center;
  justify-content: space-between;
  border: 1px solid #783937ff;
  border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: .5rem;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Author = styled.p`
  font-size: .7rem;
`;

export const Description = styled.p`
  font-size: 0.7rem;
  align-self: center;
  padding-right: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 1rem;
`;

export const StyledLogo = styled.img`
  cursor: pointer;
  object-fit: contain;
  width: 50px;
  margin-right: 1rem;
`