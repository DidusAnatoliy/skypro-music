import "@testing-library/jest-dom";
import Header from "@components/Header/Header";
import { render, screen } from "@testing-library/react";

test("renders the correct  menu items", () => {
    render(<Header />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });