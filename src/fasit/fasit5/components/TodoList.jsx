import React from "react";
import { useTodos } from "../context/Todos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
