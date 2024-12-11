import { describe, jest, test, expect, beforeEach } from "@jest/globals";
import { cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "test-utils/renderFunctions";

import TodoBlock from ".";

describe("TodoRow", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Корректное отображение", () => {
    const { getByTestId } = renderWithRouter(<TodoBlock />, {
      initialEntries: ["/"],
    });

    expect(getByTestId("todos-block")).toBeTruthy();
  });

  test("Корректное создание, переключение и удаление todo", async () => {
    const { getByTestId, findByText, queryByText } = renderWithRouter(
      <TodoBlock />,
      {
        initialEntries: ["/"],
      }
    );

    const input = getByTestId("create-input");

    await userEvent.type(input, "New test todo");
    await userEvent.type(input, "{enter}");

    expect(await findByText("New test todo")).toBeTruthy();

    await userEvent.click(getByTestId("toggle-todos"));

    await userEvent.click(getByTestId("delete-completed"));

    await waitFor(() => {
      expect(queryByText("New test todo")).not.toBeTruthy();
    });
  });
});
