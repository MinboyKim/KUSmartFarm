import React from "react";
import { Link } from "react-router-dom";

const Scale = () => {
  return (
    <div>
      <h1>Scale</h1>
      <Link to="/">Main</Link>
      <br />
      <Link to="/sensor">Sensor</Link>
    </div>
  );
};

export default Scale;
