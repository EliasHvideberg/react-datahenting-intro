import { useState } from "react";
import { useTodosDispatch } from "../context/Todos";

export function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useTodosDispatch();
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
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Legg til
      </button>
    </>
  );
}

let nextId = 3;
