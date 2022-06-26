import * as s from './Book.styled';

const Book = (props) => {
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

        <button>Buy</button>
      </s.DescriptionContainer>
    </s.BookContainer>
  );
};

export default Book;
