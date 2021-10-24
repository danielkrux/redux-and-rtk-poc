import { useState } from "react";
import type { NextPage } from "next";

import {
  useGetTodosQuery,
  useLazyGetTodoQuery,
} from "../features/todo/service";

const Home: NextPage = () => {
  const [selectedTodo, setSelectedTodo] = useState<number | undefined>();
  const { data: todos } = useGetTodosQuery();

  return (
    <main style={{ display: "flex" }}>
      <ol>
        {todos?.map((t) => (
          <li onClick={() => setSelectedTodo(t.id)} key={t.id}>
            {t.title}
          </li>
        ))}
      </ol>
      <aside>
        <SelectedTodo id={selectedTodo} />
      </aside>
    </main>
  );
};

const SelectedTodo = ({ id }: { id?: number }) => {
  const { todo } = useGetTodosQuery(undefined, {
    selectFromResult: ({ data }) => ({
      todo: data?.find((t) => t.id === id),
    }),
  });

  return <span>{todo?.title}</span>;
};

export default Home;
