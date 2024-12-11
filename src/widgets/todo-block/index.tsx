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
    allTodosLength,
    uncompletedTodosLength,
    handleCreateTodo,
    handleDeleteCompletedTodos,
    handleDeleteTodo,
    handleEditTodo,
    handleToggleAllTodos,
  } = useTodos();

  return (
    <div className="shadow-xl" data-testid="todos-block">
      <TodosContext.Provider
        value={{
          todos,
          handleCreateTodo,
          handleDeleteCompletedTodos,
          handleDeleteTodo,
          handleEditTodo,
          handleToggleAllTodos,
        }}
      >
        <div className="flex flex-col w-[550px]">
          <div className="flex">
            {allTodosLength > 0 && <DoneAllTodosButton />}
            <CreateTodoInput />
          </div>

          {allTodosLength > 0 && (
            <>
              <div>
                {todos.map((todo) => (
                  <TodoRow todo={todo} key={todo.id} />
                ))}
              </div>

              <div className="relative flex justify-center mx-5 py-3">
                <p className="absolute left-0">
                  {uncompletedTodosLength}{" "}
                  {uncompletedTodosLength == 1 ? "item" : "items"} left!
                </p>
                <Nav />
                <DeleteCompletedTodosButton />
              </div>
            </>
          )}
        </div>
      </TodosContext.Provider>
    </div>
  );
}
