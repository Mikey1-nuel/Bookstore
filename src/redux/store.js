import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import CategoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    Categories: CategoriesSlice,
  },
});

export default store;
