import { useContext, useState } from "react";

import { TodosContext } from "../../../context";
import { Todo } from "../../../model";

export default function useHandleTodo(todo: Todo) {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const onChangeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);

  const [isEditing, setIsEditing] = useState(false);
  const onEditDoubleClick = () => {
    setIsEditing(true);
  };

  const { handleDeleteTodo, handleEditTodo } = useContext(TodosContext);
  const onEditClick = () => handleEditTodo({ ...todo, status: !todo.status });
  const onDeleteClick = () => handleDeleteTodo(todo.id);
  const onEnterTodoTitle = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && todoTitle !== "") {
      handleEditTodo({ ...todo, title: todoTitle });
      setIsEditing(false);
    }
  };

  return {
    todoTitle,
    onChangeTodoTitle,
    isEditing,
    onEditDoubleClick,
    onEditClick,
    onDeleteClick,
    onEnterTodoTitle,
  };
}
