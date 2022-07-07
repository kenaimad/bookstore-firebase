import { useContext } from 'react';
import CartContext from '../../../../../store/cart-context';
import * as s from './CartSummary.styled';

const CartSummary = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <s.Wrapper>
        <s.InformationCaontainer>
          {' '}
          <h2>
            Łączna wartość koszyka: {cartContext.totalAmount.toFixed(2)} zł.
          </h2>
        </s.InformationCaontainer>
        <s.ButtonsContainer>
          <button>Wstecz</button>
          <button>Zamówienie {'>'}</button>
        </s.ButtonsContainer>
      </s.Wrapper>
    </>
  );
};

export default CartSummary;
