import { useState } from "react";
import { useTodosDispatch } from "../context/Todos";

export const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodosDispatch();
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...todo,
                text: e.target.value,
              },
            });
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
          dispatch({
            type: "changed",
            task: {
              ...todo,
              done: e.target.checked,
            },
          });
        }}
      />
      {todoContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: todo.id,
          });
        }}
      >
        Slett
      </button>
    </label>
  );
};
