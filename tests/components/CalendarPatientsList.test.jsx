import React from "react";
import { render } from "@testing-library/react";
import CalendarPatientsList from "../../src/components/CalendarPatientsList";

describe("CalendarPatientsList Component", () => {
  test("renders the CalendarPatientsList component correctly", () => {
    render(<CalendarPatientsList />);
  });
});
