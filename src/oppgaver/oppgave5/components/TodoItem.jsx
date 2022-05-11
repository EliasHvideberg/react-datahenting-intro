import { useState } from "react";
import { useTodosDispatch } from "../context/Todos";

export const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  // 10. Erstatt dispatch med dispatch fra useTodosDispatch hooken
  const dispatch = () => null;
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            // 11. kall dispatch med følgende objekt:
            /*
            {
              type: "changed",
              task: {
                ...todo,
                text: e.target.value,
              },
            }
            */
            dispatch();
          }}
        />
        <button className="todo-btn" onClick={() => setIsEditing(false)}>
          Lagre
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
        <button className="todo-btn" onClick={() => setIsEditing(true)}>
          Endre
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          // 12. kall dispatch med følgende objekt:
          /*
          {
            type: "changed",
            task: {
              ...todo,
              done: e.target.checked,
            },
          }
          */
          dispatch();
        }}
      />
      {todoContent}
      <button
        onClick={() => {
          // 13. kall dispatch med følgende objekt:
          // Gå videre til Oppgave5.jsx
          /*
          {
            type: "deleted",
            id: todo.id,
          }
          */
          dispatch();
        }}
      >
        Slett
      </button>
    </label>
  );
};
