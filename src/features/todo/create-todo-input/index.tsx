import useCreateTodo from "./hooks/use-create-todo";

export default function CreateTodoInput() {
  const { handleEnter, handleTodoTitle, todoTitle } = useCreateTodo();

  return (
    <input
      type="text"
      value={todoTitle}
      placeholder="What needs to be done?"
      onChange={handleTodoTitle}
      onKeyUp={handleEnter}
      data-testid="create-input"
      className="p-3 pl-[60px] text-2xl focus:outline-rose-400 outline-none size-full"
    />
  );
}
