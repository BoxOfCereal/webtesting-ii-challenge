import React, { useContext } from "react";
import InterfaceDispatch from "../Interface/InterfaceDispatch";

function Dashboard() {
  const dispatch = useContext(InterfaceDispatch);
  return (
    <div>
      <button>strike</button>
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
