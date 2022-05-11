import { TodosProvider } from "./context/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export function Oppgave5() {
  // Her skal du lage en todo-liste ved hjelp av context
  // Den skal kunne legge til nye todo-items, oppdatere dem og fjerne dem.
  // Slapp av, mye av logikken er allerede tilstede i komponentene.
  // Det du skal gjøre er å lage context og customhooks for å få det til å fungere!

  // Oppgaven består av 14 steg, du begynner med å følge stegene i ./context/Todos.js.

  // 14. Wrap "section" med TodosProvider
  // Voila! Legg til et element i todo-listen for å se til at alt fungerer som det skal.
  // Nå kan du gjøre bonus oppgaven og få en liten belønning for alt arbeidet 😇

  return (
    <>
      <section className="section-todo">
        <h1>Hva har jeg lært i dag?</h1>
        <AddTodo />
        <TodoList />
      </section>
    </>
  );
}
