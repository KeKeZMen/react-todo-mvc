import { describe, jest, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";

import { TodosContext } from "../../context";
import TodoRow from ".";

describe("TodoRow", () => {
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
});
