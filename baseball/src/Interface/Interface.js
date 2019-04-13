import React, { useState, useEffect, useReducer } from "react";
import Display from "../Display/Display";
import Dashboard from "../Dashboard/Dashboard";

import InterfaceDispatch from "./InterfaceDispatch";

function Interface() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment_balls":
          return { ...state, balls: state.balls + 1 > 3 ? 0 : state.balls + 1 };
        case "increment_strikes":
          return { ...state, strikes: state.strikes + 1 };
      }
    },
    {
      balls: 0,
      strikes: 0
    }
  );
  return (
    <div>
      <Display {...state} />
      <InterfaceDispatch.Provider value={dispatch}>
        <Dashboard />
      </InterfaceDispatch.Provider>
    </div>
  );
}

export default Interface;
