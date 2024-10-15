import React from "react";
import { render } from "@testing-library/react";
import LoginButton from "../../src/components/LoginButton";

describe("LoginButton Component", () => {
  test("renders the LoginButton component correctly", () => {
    render(<LoginButton />);
  });
});
