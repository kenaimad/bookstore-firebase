import { useContext } from 'react';
import CartContext from '../../../../../store/cart-context';
import * as s from './Book.styled';

const Book = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      author: props.author,
      price: props.price,
      cover: props.cover,
      amount: 1,
      
    });
  };

  return (
    <s.BookContainer>
      <s.Cover src={props.photo} alt="Book cover" />
      <h1>{props.title}</h1>
      <h2>Cena: {props.price} zł</h2>
      <s.AddButton onClick={addItemHandler}>Do koszyka {'>'}</s.AddButton>
    </s.BookContainer>
  );
};

export default Book;


