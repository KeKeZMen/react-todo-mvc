import { describe, jest, test, expect, beforeEach } from "@jest/globals";
import { render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodosContext } from "../../context";
import TodoRow from ".";

describe("TodoRow", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Корректное отображение", () => {
    const mockedContextValue = {
      todos: [{ id: 1, status: false, title: "Test todo" }],
      handleCreateTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleEditTodo: jest.fn(),
      handleDeleteCompletedTodos: jest.fn(),
      handleToggleAllTodos: jest.fn(),
    };

    const { getByText } = render(
      <TodosContext.Provider value={mockedContextValue}>
        <TodoRow todo={{ id: 1, status: false, title: "Test todo" }} />
      </TodosContext.Provider>
    );

    expect(getByText("Test todo")).toBeTruthy();
  });

  test("Корректная смена статуса", async () => {
    const todo = { id: 1, status: false, title: "Test todo" };
    const handleEditTodo = () => {
      todo.status = true;
    };

    const mockedContextValue = {
      todos: [todo],
      handleCreateTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleEditTodo,
      handleDeleteCompletedTodos: jest.fn(),
      handleToggleAllTodos: jest.fn(),
    };

    const { getByTestId } = render(
      <TodosContext.Provider value={mockedContextValue}>
        <TodoRow todo={todo} />
      </TodosContext.Provider>
    );

    await userEvent.click(getByTestId("status-button"));

    expect(todo.status).toBe(true);
  });

  test("Корректная смена текста", async () => {
    const todo = { id: 1, status: false, title: "Test todo" };
    const handleEditTodo = () => {
      todo.title = "New test value";
    };

    const mockedContextValue = {
      todos: [todo],
      handleCreateTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleEditTodo,
      handleDeleteCompletedTodos: jest.fn(),
      handleToggleAllTodos: jest.fn(),
    };

    const { getByText, findByTestId } = render(
      <TodosContext.Provider value={mockedContextValue}>
        <TodoRow todo={todo} />
      </TodosContext.Provider>
    );

    await userEvent.dblClick(getByText("Test todo"));

    const input = await findByTestId("edit-input");

    expect(input).toBeTruthy();

    await userEvent.type(input, "{enter}");

    expect(todo.title).toBe("New test value");
  });

  test("Корректное удаление", async () => {
    const todos = [{ id: 1, status: false, title: "Test todo" }];
    const handleDeleteTodo = () => {
      todos.splice(0, 1);
    };

    const mockedContextValue = {
      todos,
      handleCreateTodo: jest.fn(),
      handleDeleteTodo,
      handleEditTodo: jest.fn(),
      handleDeleteCompletedTodos: jest.fn(),
      handleToggleAllTodos: jest.fn(),
    };

    const { getByTestId, getByText } = render(
      <TodosContext.Provider value={mockedContextValue}>
        <TodoRow todo={todos[0]} />
      </TodosContext.Provider>
    );

    expect(getByText("Test todo")).toBeTruthy();

    await userEvent.click(getByTestId("delete-button"));

    expect(mockedContextValue.todos.length).toBe(0);
  });
});
