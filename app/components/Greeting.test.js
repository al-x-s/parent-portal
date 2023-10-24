import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

import "@testing-library/jest-dom";

test("renders the greeting message with the provided name", () => {
  const name = "John";
  render(<Greeting name={name} />);
  const greetingElement = screen.getByText(`Welcome back ${name}`);
  expect(greetingElement).toBeInTheDocument();
});
