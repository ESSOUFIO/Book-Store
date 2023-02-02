import bookState from "./bookSlice";
import authState from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { bookState, authState } });

export default store;
