import React from "react";
import { useTodos } from "../context/Todos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // 9. Erstatt todos med todos fra useTodos hooken
  // Gå til ./components/TodoItem.jsx
  const todos = [];
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
