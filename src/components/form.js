import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const addNewBook = {
        item_id: uuidv4(),
        title,
        author,
        category: null,
      };
      dispatch(postBooks(addNewBook))
        .then(() => {
          dispatch(addBook(addNewBook));
          setTitle('');
          setauthor('');
        });
    }
  };
  return (
    <div className="formcontainer">
      <h2 className="formtitle">ADD NEW BOOK</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Book title" className="booktitle" required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" className="bookauthor" required onChange={(e) => setauthor(e.target.value)} />
        <input type="submit" className="submitbtn" value="Add Book" />
      </form>
    </div>
  );
}
export default Form;
