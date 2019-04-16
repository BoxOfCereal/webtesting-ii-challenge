import React from "react";

function Display({ balls, strikes }) {
  return (
    <div>
      <p>
        Balls: <span data-testid="ball-count">{balls}</span>
      </p>
      <p>
        Strikes: <span data-testid="strike-count">{strikes}</span>
      </p>
    </div>
  );
}

export default Display;
