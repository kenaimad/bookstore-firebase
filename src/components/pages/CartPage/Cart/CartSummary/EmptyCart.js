import {
    DescriptionContainer,
    StyledButton,
    StyledP,
    Wrapper,
  } from './CartSummary.styled';
  
  const EmptyCart = () => {
    return (
      <Wrapper>
        <p>Cart is empty!</p>
      </Wrapper>
    );
  };
  
  export default EmptyCart;