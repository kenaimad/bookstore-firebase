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
      <s.CoverContainer>
        {' '}
        <img src={props.photo} alt="Book cover" />
      </s.CoverContainer>
      <s.DescriptionContainer>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <h3>Cena: {props.price}zł</h3>

        <button onClick={addItemHandler}>Buy</button>
      </s.DescriptionContainer>
    </s.BookContainer>
  );
};

export default Book;
