import React from "react";

function Display({ balls, strikes }) {
  return (
    <div>
      <p>
        Balls: <span>{balls}</span>
      </p>
      <p>
        Strikes: <span>{strikes}</span>
      </p>
    </div>
  );
}

export default Display;
