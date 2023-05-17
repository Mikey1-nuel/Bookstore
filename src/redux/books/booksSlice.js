import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const endPoint = 'td3fda4c0tMygqjhj0bA';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${endPoint}/books`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (book) => {
  try {
    const response = await axios.post(baseUrl, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, { item_id: id });
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  books: [],
  isLoading: true,
  isAdded: true,
  isDeleted: true,
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
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const bookItem = action.payload;
        const newBook = [];
        Object.keys(bookItem).forEach((book) => newBook.push({
          item_id: book,
          title: bookItem[book][0].title,
          author: bookItem[book][0].author,
        }));
        return {
          ...state,
          books: newBook,
          isLoading: false,
        };
      })
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBooks.pending, (state) => ({
        ...state,
        isAdded: false,
      }))
      .addCase(postBooks.fulfilled, (state) => ({
        ...state,
        isAdded: true,
      }))
      .addCase(deleteBooks.pending, (state) => ({
        ...state,
        isDeleted: false,
      }))
      .addCase(deleteBooks.fulfilled, (state) => ({
        ...state,
        isDeleted: true,
      }));
  },
});

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;
