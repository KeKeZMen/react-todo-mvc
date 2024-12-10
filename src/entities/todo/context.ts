import { Todo } from "./model";

import { createContext } from "react";

export type TodosContextType = {
  todos: Todo[];
  handleCreateTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (todo: Todo) => void;
  handleDeleteCompletedTodos: () => void;
} | null;

export const TodosContext = createContext<TodosContextType>(null);
