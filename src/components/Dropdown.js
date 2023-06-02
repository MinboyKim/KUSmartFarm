import React from "react";
import style from "../css/Nav.module.css";

const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  React.useEffect(() => {
    if (props.visibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [props.visibility]);

  return (
    <article
      className={`components-dropdown ${
        props.visibility
          ? style["slide-fade-in-dropdown"]
          : style["slide-fade-out-dropdown"]
      }`}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default Dropdown;
