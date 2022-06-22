import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("key on page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Play Sound/i);
  expect(linkElement).toBeInTheDocument();
});
