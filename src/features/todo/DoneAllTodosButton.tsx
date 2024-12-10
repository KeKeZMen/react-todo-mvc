import { TodosContext } from "@/entities/todo/context";
import { useContext } from "react";

export default function DoneAllTodosButton() {
  const { handleDoneAllTodos } = useContext(TodosContext);

  return <button onClick={handleDoneAllTodos}>Done all</button>;
}
