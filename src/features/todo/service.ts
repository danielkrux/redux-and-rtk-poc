import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "./types/Todo";

export const todoApi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["todos"],
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
    }),
    getTodo: builder.query<Todo, number | void>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery, useLazyGetTodoQuery } =
  todoApi;
