import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("The Dashboard Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Dashboard />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
