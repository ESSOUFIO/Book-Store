import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      bookData.userName = getState().authState.userName;
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (bookId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch("http://localhost:3005/books/" + bookId, {
        method: "DELETE",
      });
      return bookId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBookInfo = createAsyncThunk(
  "book/getBookInfo",
  async (bookID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/books/${bookID}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], bookInfo: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    //**** ====== GET =====  */
    builder.addCase(getBooks.pending, (state, action) => {
      //waiting response
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      //success fetch from API
      state.isLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      //failed to get response
      state.isLoading = false;
      state.error = action.payload;
    });

    //**** ======  INSERT ======= */
    builder.addCase(insertBook.pending, (state, action) => {
      //waiting response
      // state.isLoading = true;
      state.error = null;
    });

    builder.addCase(insertBook.fulfilled, (state, action) => {
      //success fetch from API
      // state.isLoading = false;
      state.books.push(action.payload);
      //state.books += action.payload;
    });

    builder.addCase(insertBook.rejected, (state, action) => {
      //failed to get response
      // state.isLoading = false;
      state.error = action.payload;
    });

    //**** ======  DELETE ======= */
    builder.addCase(deleteBook.pending, (state, action) => {
      //waiting response
      // state.isLoading = true;
      state.error = null;
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      //success fetch from API
      state.books = state.books.filter((el) => el.id !== action.meta.arg);
    });

    builder.addCase(deleteBook.rejected, (state, action) => {
      //failed to get response
      state.error = action.payload;
    });

    //**** ======  Book Info ======= */
    builder.addCase(getBookInfo.pending, (state, action) => {
      //waiting response
      state.error = null;
    });

    builder.addCase(getBookInfo.fulfilled, (state, action) => {
      //success fetch from API
      state.bookInfo = action.payload;
    });

    builder.addCase(getBookInfo.rejected, (state, action) => {
      //failed to get response
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
