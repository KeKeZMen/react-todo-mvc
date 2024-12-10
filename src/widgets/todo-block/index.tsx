import { TodosContext } from "@/entities/todo/context";
import CreateTodoInput from "@/features/todo/create-todo-input";
import TodoRow from "@/entities/todo/ui/todo-row";
import DeleteCompletedTodosButton from "@/features/todo/DeleteCompletedTodosButton";

import Nav from "../Nav";
import useTodos from "./hooks/use-todos";

export default function TodoBlock() {
  const {
    handleCreateTodo,
    handleDeleteCompletedTodos,
    handleDeleteTodo,
    handleEditTodo,
    todos,
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
        }}
      >
        <div>
          <CreateTodoInput />
          {todos.map((todo) => (
            <TodoRow todo={todo} key={todo.id} />
          ))}
          <div className="flex gap-3">
            <Nav />

            <DeleteCompletedTodosButton />
          </div>
        </div>
      </TodosContext.Provider>
    </div>
  );
}
