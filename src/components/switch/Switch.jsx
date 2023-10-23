

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import union2 from "../../assets/union2.svg"

export const Switch = ({ state, className }) => {
  return (
    <div className={`switch ${state} ${className}`}>
      <img className="union" alt="Union" src={union2} />
    </div>
  );
};


Switch.propTypes = {
  state: PropTypes.oneOf(["off", "on"]),
};
