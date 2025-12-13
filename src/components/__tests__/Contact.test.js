import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
  //You csn use it or test
  it("Should Heading render in Contact component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should Check button render in Contact component", () => {
    render(<Contact />);

    //Querying
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should Check submit test render in Contact component", () => {
    render(<Contact />);

    //Querying
    const buttonTxt = screen.getByText("Submit");

    //Assertion
    expect(buttonTxt).toBeInTheDocument();
  });

  it("Should Check input render in Contact component", () => {
    render(<Contact />);

    //Querying
    const input = screen.getAllByRole("textbox");

    //Assertion
    expect(input.length).toBe(2);
  });
});
