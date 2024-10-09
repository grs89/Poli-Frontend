/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuShortcut = ({ shortcut = "⇧A", className, divClassName }) => {
  return (
    <div className={`menu-shortcut ${className}`}>
      <div className={`a ${divClassName}`}>{shortcut}</div>
    </div>
  );
};

MenuShortcut.propTypes = {
  shortcut: PropTypes.string,
};
