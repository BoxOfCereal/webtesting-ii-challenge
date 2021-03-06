import React, { useState, useEffect, useReducer } from "react";
import Display from "../Display/Display";
import Dashboard from "../Dashboard/Dashboard";

import InterfaceDispatch from "./InterfaceDispatch";

function Interface() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment_balls":
          if (state.balls + 1 > 3) return { ...state, balls: 0, strikes: 0 };
          return { ...state, balls: state.balls + 1 };
        case "increment_strikes":
          if (state.strikes + 1 > 2) return { ...state, balls: 0, strikes: 0 };
          return { ...state, strikes: state.strikes + 1 };
        case "record_foul":
          if (state.strikes + 1 > 2) return { ...state, strikes: 2 };
          return { ...state, strikes: state.strikes + 1 };
        case "record_hit":
          return { ...state, strikes: 0, balls: 0 };
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
