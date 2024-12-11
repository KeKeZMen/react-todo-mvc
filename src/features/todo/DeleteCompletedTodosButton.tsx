import { TodosContext } from "@/entities/todo/context";
import { useContext } from "react";

export default function DeleteCompletedTodosButton() {
  const { handleDeleteCompletedTodos } = useContext(TodosContext);

  return (
    <button className="absolute right-0" onClick={handleDeleteCompletedTodos}>
      Delete completed
    </button>
  );
}
