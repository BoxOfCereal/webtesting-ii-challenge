import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Interface from "./Interface";

describe("The Interface Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Interface />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
