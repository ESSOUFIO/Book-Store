import bookState from "./bookSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { bookState } });

export default store;
