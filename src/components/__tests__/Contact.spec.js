import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact.js";

describe("Contact Component", () => {
  it("should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should have button in Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should have button in Contact Component", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");
    //Assertion
    expect(submit).toBeInTheDocument();
  });

  it("Shaould have two input boxes", () => {
    render(<Contact />);

    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
