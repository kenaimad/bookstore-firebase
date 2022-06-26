import { useState, useEffect } from 'react';
import * as API from "../../../../api/API";
import * as s from './BookList.styled';
import Book from './Book/Book';

const BookList = () => {
  const [books, setBooks] = useState([{
    id: "",
    title: ""
  }]);

  const getBooks = () => {
    API.getBooks().then((data) => {
      setBooks(data);
      //console.log(data);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return <s.BooksList>
    {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} photo={book.photo} price={book.price}/>
    ))}
  </s.BooksList>;
};

export default BookList;
