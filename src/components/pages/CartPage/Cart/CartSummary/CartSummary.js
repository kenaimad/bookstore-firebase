import { useContext } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import CartContext from '../../../../../store/cart-context';
import * as s from './CartSummary.styled';

const CartSummary = () => {
  const cartContext = useContext(CartContext);

  const navigate = useNavigate();

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
          <button onClick={() => navigate(-1)}>Wstecz</button>
          <NavLink to="/order"><button>Zamówienie {'>'}</button></NavLink>
        </s.ButtonsContainer>
      </s.Wrapper>
    </>
  );
};

export default CartSummary;
