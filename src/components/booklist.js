import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookDetails from './bookdetails';
import Form from './form';
import { getBooks } from '../redux/books/booksSlice';

function BookList() {
  const Books = useSelector((state) => state.books.books);
  const Loading = useSelector((state) => state.books.Loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (Loading) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <div className="container5">
      {Books.map((book) => (
        <BookDetails key={book.item_id} book={book} />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
