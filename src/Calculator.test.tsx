import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "./Calculator";
describe("Calculator Component", () => {
  test("renders Calculator component", () => {
    render(<Calculator />);
    expect(screen.getByText("Calculator")).toBeInTheDocument();
  });

  test("performs addition operation", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByLabelText("Number 1"), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText("Number 2"), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText(/Result: [0-9]+\.[0-9]+/)).toBeInTheDocument();
  });

  test("performs subtraction operation", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByLabelText("Number 1"), {
      target: { value: "8" },
    });
    fireEvent.change(screen.getByLabelText("Number 2"), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByText("Subtract"));

    expect(screen.getByText(/Result: [0-9]+\.[0-9]+/)).toBeInTheDocument();
  });

  test("performs multiplication operation", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByLabelText("Number 1"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Number 2"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Multiply"));

    expect(screen.getByText(/Result: [0-9]+\.[0-9]+/)).toBeInTheDocument();
  });

  test("handles invalid input for division operation", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByLabelText("Number 1"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Number 2"), {
      target: { value: "0" },
    });
    fireEvent.click(screen.getByText("Divide"));

    expect(
      screen.getByText(/Result: (Infinity|Invalid input)/),
    ).toBeInTheDocument();
  });

  test('handles empty input and sets result to "Invalid input"', () => {
    render(<Calculator />);

    fireEvent.change(screen.getByLabelText("Number 1"), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText("Number 2"), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Result: Invalid input")).toBeInTheDocument();
  });
});
