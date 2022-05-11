import { useState } from "react";
import { useTodosDispatch } from "../context/Todos";

export function AddTodo() {
  const [text, setText] = useState("");
  // 7. Ta i bruk dispatch fra useTodosDispatch nedenfor
  const dispatch = () => null;
  return (
    <>
      <input
        placeholder="Legg til"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="todo-btn"
        onClick={() => {
          setText("");
          // 8. kall dispatch her med { type: "added", id: nextId++, text: text }
          // Gå videre til ./components/TodoList.jsx
          dispatch();
        }}
      >
        Legg til
      </button>
    </>
  );
}

let nextId = 3;
