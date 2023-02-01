import bookReducer from "./bookSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { bookReducer } });

export default store;
