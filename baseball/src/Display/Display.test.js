import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
// import "jest-dom/extend-expect";

import Display from "./Display";

describe("The Display Component", () => {
  it("renders without crashing", () => {
    render(<Display />);
    cleanup();
  });
  it("should render the number of balls and strikes", () => {
    const props = { balls: 1, strikes: 1 };

    const { getByTestId } = render(<Display {...props} />);
    const balls = getByTestId("ball-count");
    expect(balls.textContent).toBe("1");
    const strikes = getByTestId("strike-count");
    expect(strikes.textContent).toBe("1");
  });
});
