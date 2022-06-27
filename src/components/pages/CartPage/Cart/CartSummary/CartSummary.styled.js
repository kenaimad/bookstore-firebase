import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 270px;
  height: 100px;
  margin: 1rem;
  align-self: flex-start;
  justify-content: space-between;
  padding: 1rem;
`;

export const DescriptionContainer = styled.div`
  align-self: center;
  padding-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  height: 40px;
  width: 30%;
  align-self: center;
  background-color: #783937ff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in;
  color: white;
  font-family: 'Roboto', sans-serif;
  margin-top: 4rem;
  &:hover {
    background-color: #f1ac88ff;
  }
`;

export const StyledP = styled.p`
  position: absolute;
  font-size: 1.6rem;
  font-weight: bold;
  top: 0px;
  left: 20px;
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;