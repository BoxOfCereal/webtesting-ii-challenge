import React, { useContext } from "react";
import InterfaceDispatch from "../Interface/InterfaceDispatch";

function Dashboard() {
  const dispatch = useContext(InterfaceDispatch);
  const incrementStrikes = () => {
    dispatch({ type: "increment_strikes" });
  };
  return (
    <div>
      <button onClick={incrementStrikes}>strike</button>
      <button
        onClick={() => {
          dispatch({ type: "increment_balls" });
        }}
      >
        ball
      </button>
      <button>foul</button>
      <button>hit</button>
    </div>
  );
}

export default Dashboard;
