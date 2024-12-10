import { useMemo } from "react";

import { TodosContext } from "@/entities/todo/context";
import CreateTodoInput from "@/features/todo/create-todo-input";
import TodoRow from "@/entities/todo/ui/todo-row";
import DeleteCompletedTodosButton from "@/features/todo/DeleteCompletedTodosButton";
import DoneAllTodosButton from "@/features/todo/DoneAllTodosButton";

import Nav from "../Nav";
import useTodos from "./hooks/use-todos";

export default function TodoBlock() {
  const {
    todos,
    todosLengts,
    handleCreateTodo,
    handleDeleteCompletedTodos,
    handleDeleteTodo,
    handleEditTodo,
    handleDoneAllTodos,
  } = useTodos();

  return (
    <div>
      <TodosContext.Provider
        value={{
          todos,
          handleCreateTodo,
          handleDeleteCompletedTodos,
          handleDeleteTodo,
          handleEditTodo,
          handleDoneAllTodos,
        }}
      >
        <div className="flex flex-col">
          <div className="flex">
            <DoneAllTodosButton />
            <CreateTodoInput />
          </div>

          <div>
            {todos.map((todo) => (
              <TodoRow todo={todo} key={todo.id} />
            ))}
          </div>

          <div className="flex gap-3">
            <p>
              {todosLengts} {todosLengts == 1 ? "item" : "items"} left!
            </p>
            <Nav />
            <DeleteCompletedTodosButton />
          </div>
        </div>
      </TodosContext.Provider>
    </div>
  );
}
