import React from "react";
import Containers from "../../css/Container.module.css";

const Contents = ({ children }) => {
  return <div className={Containers.container}>{children}</div>;
};

export default Contents;
