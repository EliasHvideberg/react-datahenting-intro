import { createContext, useContext, useReducer } from "react";

// 1. Lag en TodosContext med default verdi null

// 2. Lag en TodosDispatchContext med default verdi null

export function TodosProvider({ children }) {
  // Les mer om reducer her: https://reactjs.org/docs/hooks-reference.html#usereducer
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  // 3. Wrap children med TodosDispatchContext provider med value: dispatch
  // 4. Wrap TodosDispatchContext provideren med TodosContext provider med value: todos
  return <>{children}</>;
}

export function useTodos() {
  // 5. returner TodosContext
  return null;
}

export function useTodosDispatch() {
  // 6. returner TodosDispatchContext
  // Gå så til ./components/AddTodo.js
  return null;
}

// Denne funksjonen tar imot forskjellige "actions" og returnerer en ny todos-state.
// Du trenger ikke gjøre endringer i denne.
function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// Dette er en initial state for todos
const initialTodos = [
  { id: 0, text: "å bruke useContext", done: true },
  { id: 1, text: "å bruke createContext", done: false },
  { id: 2, text: "å lage custom hook med context", done: false },
];
