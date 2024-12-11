import { TodosContext } from "@/entities/todo/context";
import { useContext } from "react";

export default function DoneAllTodosButton() {
  const { handleToggleAllTodos } = useContext(TodosContext);

  return (
    <button
      onClick={handleToggleAllTodos}
      data-testid="toggle-todos"
      className="absolute flex items-center justify-center w-[60px] h-[60px]"
    >
      <svg
        className="text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="60"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m8 10 4 4 4-4"
        />
      </svg>
    </button>
  );
}
