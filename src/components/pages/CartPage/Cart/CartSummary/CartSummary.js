import { useContext } from 'react';
import CartContext from '../../../../../store/cart-context';
import {
  DescriptionContainer,
  StyledDescription,
  StyledP,
  Wrapper,
} from './CartSummary.styled';

const CartSummary = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <Wrapper>
        <StyledP>Summary:</StyledP>
        <DescriptionContainer>
          <StyledDescription>
            Total Price: {cartCtx.totalAmount} PLN
          </StyledDescription>
          <StyledDescription>Total items: {cartCtx.quantity}</StyledDescription>
        </DescriptionContainer>
      </Wrapper>
    </>
  );
};

export default CartSummary;