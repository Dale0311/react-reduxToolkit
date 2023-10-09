import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: {},
};

const todoSlice = createSlice({
  name: todo,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        isCompleted: false,
        id: nanoid(),
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id !== action.payload.id ? { ...todo } : payload.updatedTodo
      );
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
