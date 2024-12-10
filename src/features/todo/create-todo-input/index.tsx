import useCreateTodo from "./hooks/use-create-todo";

export default function CreateTodoInput() {
  const { handleEnter, handleTodoTitle, todoTitle } = useCreateTodo();

  return (
    <input
      type="text"
      value={todoTitle}
      onChange={handleTodoTitle}
      onKeyUp={handleEnter}
      className="border border-red-400 w-full"
    />
  );
}
