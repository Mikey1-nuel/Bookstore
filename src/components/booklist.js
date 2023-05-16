import React from 'react';
import { useSelector } from 'react-redux';
import BookDetails from './bookdetails';
import Form from './form';

function BookList() {
  const Books = useSelector((state) => state.books.books);
  return (
    <div className="container3">
      {Books.map((book) => (
        <BookDetails key={book.item_id} book={book} />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
