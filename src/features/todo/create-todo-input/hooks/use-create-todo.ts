import { TodosContext } from "@/entities/todo/context";
import React, { useContext, useState } from "react";

export default function useCreateTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);

  const { handleCreateTodo } = useContext(TodosContext);
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && todoTitle !== "") {
      handleCreateTodo({ id: Date.now(), status: false, title: todoTitle });
      setTodoTitle("");
    }
  };

  return {
    todoTitle,
    handleTodoTitle,
    handleEnter,
  };
}
