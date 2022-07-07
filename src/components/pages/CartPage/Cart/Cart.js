import React, { useContext } from 'react';
import CartContext from '../../../../store/cart-context';
import Labels from './Labels/Labels';
import * as s from './Cart.styled';

import CartItem from './CartItem/CartItem';
import CartSummary from './CartSummary/CartSummary';
import EmptyCart from './CartSummary/EmptyCart';
import OrderForm from './OrderForm/OrderForm';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartAddItemHandler = (item) => {
    cartContext.addItem(item);
  };

  return (
    <s.Wrapper>
      <s.CartItemsContainer>
        {cartContext.quantity !== 0 && <Labels />}
        {cartContext.items.map((book) => (
          <CartItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            cover={book.cover}
            amount={book.amount}
            onRemove={cartItemRemoveHandler.bind(null, book.id)}
            onAdd={cartAddItemHandler.bind(null, book)}
          />
        ))}
      </s.CartItemsContainer>
        {cartContext.quantity !== 0 && <CartSummary />}
        {cartContext.quantity === 0 && <EmptyCart />}
    </s.Wrapper>
  );
};

export default Cart;
