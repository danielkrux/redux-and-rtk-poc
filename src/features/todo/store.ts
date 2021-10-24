import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface TodoState {
  selectedTodo: number | undefined;
}

const initialState = {
  selectedTodo: undefined,
} as TodoState;

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedTodo: (state, action: PayloadAction<number>) => {
      state.selectedTodo = action.payload;
    },
  },
});

export const { setSelectedTodo } = todoSlice.actions;

export const getSelectedTodo = (state: RootState) => state.todo.selectedTodo;

export default todoSlice.reducer;
