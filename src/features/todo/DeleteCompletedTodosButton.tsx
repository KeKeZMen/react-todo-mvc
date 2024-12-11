import { TodosContext } from "@/entities/todo/context";
import { useContext } from "react";

export default function DeleteCompletedTodosButton() {
  const { handleDeleteCompletedTodos } = useContext(TodosContext);

  return (
    <button
      className="absolute right-0"
      onClick={handleDeleteCompletedTodos}
      data-testid="delete-completed"
    >
      Delete completed
    </button>
  );
}
