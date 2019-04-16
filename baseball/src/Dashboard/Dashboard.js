import React, { useContext } from "react";
import InterfaceDispatch from "../Interface/InterfaceDispatch";

function Dashboard() {
  const dispatch = useContext(InterfaceDispatch);
  const incrementStrikes = () => {
    dispatch({ type: "increment_strikes" });
  };
  const incrementBalls = () => {
    dispatch({ type: "increment_balls" });
  };
  const recordFoul = () => {
    dispatch({ type: "record_foul" });
  };
  const recordHit = () => {
    dispatch({ type: "record_hit" });
  };
  return (
    <div>
      <button onClick={incrementStrikes}>strike</button>
      <button onClick={incrementBalls}>ball</button>
      <button onClick={recordFoul}>foul</button>
      <button onClick={recordHit}>hit</button>
    </div>
  );
}

export default Dashboard;
