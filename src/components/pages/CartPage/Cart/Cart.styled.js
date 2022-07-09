import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  margin: 1rem;
  overflow-y: auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const CartItemsContainer = styled.div`
  width: 100%;
`;

export const SummaryContainer = styled.div`
  //margin-top: 4rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  height: 450px;
  max-height: 700px;
  border: 1px solid #783937ff;
  background-color: #f7e3b7;
  overflow-y: auto;

`;

export const StyledTitle = styled.h2`
  margin-top: 1rem;
  padding-left: 1rem;
`;