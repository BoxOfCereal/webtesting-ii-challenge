import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent } from "react-testing-library";
// import "jest-dom/extend-expect";

import Display from "./Display";

describe("The Display Component", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
});
