import React from "react";
import propTypes from "prop-types";

import "./Button.scss";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isHide) className.push("btn-hide");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <div className="btn-wrap">
      <button
        className={className.join(" ")}
        onClick={onClick}
        value={props.value}
      >
        {props.title}
      </button>
    </div>
  );
}
Button.propTypes = {
  isPrimary: propTypes.bool,
  isHide: propTypes.bool,
  title: propTypes.string,
  value: propTypes.string,
  onClick: propTypes.func,
};
