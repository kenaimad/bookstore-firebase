import { useContext } from 'react';
import CartContext from '../../../../store/cart-context';
import * as s from './CartButton.styled';

const CartButton = () => {
  const cartContext = useContext(CartContext);
  return (
    <s.CartBadge>
      <s.CartIcon src={require('../icons/cart-icon.png')} alt="Cart Icon" />
      <span>Cart</span>{' '}
      {cartContext.items.length !== 0 && (
        <s.StyledQuantity>{cartContext.quantity}</s.StyledQuantity>
      )}
    </s.CartBadge>
  );
};

export default CartButton;
