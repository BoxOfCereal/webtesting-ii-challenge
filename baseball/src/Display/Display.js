import React, { useState, useEffect, useReducer } from "react";

function Display({ balls, strikes }) {
  return (
    <table>
      <tr>
        <th>Balls</th>
        <th>Strikes</th>
      </tr>
      <tr>
        <td>{balls}</td>
        <td>{strikes}</td>
      </tr>
    </table>
  );
}

export default Display;
