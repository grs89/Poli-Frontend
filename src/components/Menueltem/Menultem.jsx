/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Star12 } from "../../icons/Star12";
import { MenuShortcut } from "../MenuShortcut";
import "./style.css";

export const MenuItem = ({
  label = "Menu Label",
  hasShortcut = true,
  hasIcon = true,
  description = "Menu description.",
  hasDescription = true,
  stateProp,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`menu-item ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {hasIcon && (
        <Star12
          className="star"
          color={state.state === "hover" ? "#F5F5F5" : state.state === "disabled" ? "#B3B3B3" : "#1E1E1E"}
        />
      )}

      <div className="body">
        <div className="row">
          <div className="label">{label}</div>
          {hasShortcut && (
            <MenuShortcut
              className="menu-shortcut-instance"
              divClassName={`${state.state === "hover" && "class"}`}
              shortcut="⇧A"
            />
          )}
        </div>
        {hasDescription && <div className="description">{description}</div>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "disabled",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };
  }

  return state;
}

MenuItem.propTypes = {
  label: PropTypes.string,
  hasShortcut: PropTypes.bool,
  hasIcon: PropTypes.bool,
  description: PropTypes.string,
  hasDescription: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
};
