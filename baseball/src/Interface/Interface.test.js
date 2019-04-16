import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
afterEach(cleanup);

import Interface from "./Interface";

function multiClick(element, amount) {
  for (let i = 0; i < amount; i++) {
    fireEvent.click(element);
  }
}

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
  });
  it("resets balls and strikes after four balls", () => {
    const ballsAfterReset = "0";
    const strikesAfterReset = "0";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("ball");
    const strikeButton = getByText("strike");

    fireEvent.click(strikeButton);
    multiClick(button, 4);

    const ballCount = getByTestId("ball-count").textContent;
    const strikeCount = getByTestId("strike-count").textContent;

    expect(ballCount).toBe(ballsAfterReset);
    expect(strikeCount).toBe(strikesAfterReset);
  });

  it("correctly updates strikes after the click event", () => {
    const strikesAfterClick = "1";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("strike");
    fireEvent.click(button);

    const strikeCount = getByTestId("strike-count").textContent;

    expect(strikeCount).toBe(strikesAfterClick);
  });
  it("resets balls and strikes after three strikes", () => {
    const ballsAfterReset = "0";
    const strikesAfterReset = "0";

    const { getByTestId, getByText } = render(<Interface />);
    const button = getByText("ball");
    const strikeButton = getByText("strike");
    multiClick(button, 2);
    multiClick(strikeButton, 3);

    const ballCount = getByTestId("ball-count").textContent;
    const strikeCount = getByTestId("strike-count").textContent;

    expect(strikeCount).toBe(strikesAfterReset);
    expect(ballCount).toBe(ballsAfterReset);
  });
  it("recordes a strike when there's a foul", () => {
    const strikesAfterFoul = "1";
    const { getByTestId, getByText } = render(<Interface />);
    const foulButton = getByText("foul");
    fireEvent.click(foulButton);

    const strikeCount = getByTestId("strike-count").textContent;
    expect(strikeCount).toBe(strikesAfterFoul);
  });
  it("doesn't increase strikes when there's more than two fouls", () => {
    const strikesAfterFoul = "2";
    const { getByTestId, getByText } = render(<Interface />);
    const foulButton = getByText("foul");
    multiClick(foulButton, 5);

    const strikeCount = getByTestId("strike-count").textContent;
    expect(strikeCount).toBe(strikesAfterFoul);
  });
  it("resets strikes and balls when there's a hit", () => {
    const strikesAfterHit = "0";
    const ballsAfterHit = "0";
    const { getByTestId, getByText } = render(<Interface />);

    const strikeButton = getByText("strike");
    const ballButton = getByText("ball");
    const hitButton = getByText("hit");

    multiClick(strikeButton, 2);
    multiClick(ballButton, 3);
    fireEvent.click(hitButton);

    const strikeCount = getByTestId("strike-count").textContent;
    expect(strikeCount).toBe(strikesAfterHit);
    const ballCount = getByTestId("ball-count").textContent;
    expect(ballCount).toBe(ballsAfterHit);
  });
});
