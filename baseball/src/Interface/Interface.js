import React, { useState, useEffect, useReducer } from "react";

function Interface() {
  const [state, dispatch] = useReducer((state, action) => {}, {
    balls: 0,
    strikes: 0
  });
  return <div />;
}

export default Interface;
