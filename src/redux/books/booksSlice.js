import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
      state.bookItems = state.bookItems.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;
