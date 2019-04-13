import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Interface from "./Interface";

describe("The Interface Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Interface />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it("correctly updates balls after the click event", () => {
    const ballsAfterClick = "1";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("ball");
    fireEvent.click(button);

    const ballCount = getByTestId("ball-count").textContent;

    expect(ballCount).toBe(ballsAfterClick);
    cleanup();
  });
  it("resets balls after four balls", () => {
    const ballsAfterClick = "0";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("ball");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const ballCount = getByTestId("ball-count").textContent;

    expect(ballCount).toBe(ballsAfterClick);
  });

  it("correctly updates strikes after the click event", () => {
    const strikesAfterClick = "1";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("strike");
    fireEvent.click(button);

    const ballCount = getByTestId("strike-count").textContent;

    expect(ballCount).toBe(strikesAfterClick);
  });
});
