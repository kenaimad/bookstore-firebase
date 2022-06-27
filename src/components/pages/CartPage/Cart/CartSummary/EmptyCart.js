import {
    DescriptionContainer,
    StyledButton,
    StyledP,
    Wrapper,
  } from './CartSummary.styled';
  
  const EmptyCart = () => {
    return (
      <Wrapper>
        <DescriptionContainer>
          <StyledP>Your cart is empty!</StyledP>
        </DescriptionContainer>
        <StyledButton>Go back to catalog</StyledButton>
      </Wrapper>
    );
  };
  
  export default EmptyCart;