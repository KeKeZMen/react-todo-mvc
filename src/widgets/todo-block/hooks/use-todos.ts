import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { Todo } from "@/entities/todo/model";

export default function useTodos() {
  const { pathname } = useLocation();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleCreateTodo = (todo: Todo) => setTodos((prev) => [...prev, todo]);

  const handleDeleteTodo = (id: number) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const handleEditTodo = (editedTodo: Todo) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editedTodo.id
          ? { id: todo.id, status: editedTodo.status, title: editedTodo.title }
          : todo
      )
    );

  const handleDeleteCompletedTodos = () =>
    setTodos((prev) => prev.filter((todo) => !todo.status));

  const handleDoneAllTodos = () =>
    setTodos((prev) => prev.map((todo) => ({ ...todo, status: true })));

  const todosLengts = useMemo(
    () => todos.filter((todo) => !todo.status).length,
    [todos]
  );

  useEffect(() => {
    switch (pathname) {
      case "/active": {
        setFilteredTodos(todos.filter((todo) => !todo.status));
        break;
      }

      case "/completed": {
        setFilteredTodos(todos.filter((todo) => todo.status));
        break;
      }

      case "/":
      default: {
        setFilteredTodos(todos);
        break;
      }
    }
  }, [pathname, todos]);

  return {
    todos: filteredTodos,
    todosLengts,
    handleCreateTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleDeleteCompletedTodos,
    handleDoneAllTodos,
  };
}
