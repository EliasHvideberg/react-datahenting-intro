import { TodosProvider } from "./context/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export function Fasit5() {
  return (
    <TodosProvider>
      <section className="section-todo">
        <h1>Hva har jeg lært i dag?</h1>
        <AddTodo />
        <TodoList />
      </section>
    </TodosProvider>
  );
}
