import React from "react";
import { render } from "@testing-library/react";
import { InitialEntry, MemoryRouter } from "react-router-dom";

type Config = {
  initialEntries?: InitialEntry[];
};

export function renderWithRouter(
  component: React.JSX.Element,
  { initialEntries }: Config
) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
  );
}
