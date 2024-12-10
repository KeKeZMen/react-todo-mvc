import { Todo } from "../../model";
import useHandleTodo from "./hooks/use-handle-todo";

type Props = {
  todo: Todo;
};

export default function TodoRow({ todo }: Props) {
  const {
    isEditing,
    onChangeTodoTitle,
    onDeleteClick,
    onEditClick,
    onEditDoubleClick,
    onEnterTodoTitle,
    todoTitle,
  } = useHandleTodo(todo);

  return (
    <div className="flex justify-between items-center gap-3">
      <button onClick={onEditClick}>{todo.status ? "Done" : "No done"}</button>
      {isEditing ? (
        <input
          type="text"
          value={todoTitle}
          onChange={onChangeTodoTitle}
          onKeyUp={onEnterTodoTitle}
        />
      ) : (
        <p onDoubleClick={onEditDoubleClick}>{todoTitle}</p>
      )}
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}
