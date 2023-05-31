import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link to="/sensor">Sensor</Link>
      <Link to="/scale">Scale</Link>
    </div>
  );
};

export default Main;
