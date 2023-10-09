import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos";
const store = configureStore({
  reducer: todoReducer,
});
export default store;
