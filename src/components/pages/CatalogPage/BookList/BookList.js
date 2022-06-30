import { useState, useEffect } from 'react';
import * as API from '../../../../api/API';
import * as s from './BookList.styled';
import Book from './Book/Book';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 6;
  const pagesVisited = pageNumber * booksPerPage;
  const pageCount = Math.ceil(books.length / booksPerPage);

  const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        photo={book.photo}
        price={book.price}
      />
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const getBooks = () => {
    API.getBooks().then((data) => {
      setBooks(data);
      //console.log(data);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <s.BooksList>
      <s.CatalogContainer>{displayBooks}</s.CatalogContainer>
        <s.Pagination
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={changePage}
        />
    </s.BooksList>
  );
};

export default BookList;
