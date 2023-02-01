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

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      //waiting response
      state.isLoading = true;
      state.error = null;
      console.log(action);
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
  },
});

export default bookSlice.reducer;
