import React from "react";
import { Link } from "react-router-dom";

const Sensor = () => {
  return (
    <div>
      <h1>Sensor</h1>
      <Link to="/">Main</Link>
      <br />
      <Link to="/scale">Scale</Link>
    </div>
  );
};

export default Sensor;
