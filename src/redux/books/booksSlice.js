import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      item_id: uuidv4(),
      author: 'John Smith',
      title: 'The Great Gatsby',
      category: 'Fiction',
    },
    {
      item_id: uuidv4(),
      author: 'Leo Tolstoy',
      title: 'Anna Karenina',
      category: 'Fiction',
    },
    {
      item_id: uuidv4(),
      author: 'Richard Dawkins',
      title: 'The Selfish Gene',
      category: 'Nonfiction',
    },
  ],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;
