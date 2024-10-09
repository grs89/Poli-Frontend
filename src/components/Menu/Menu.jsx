/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MenuItem } from "../MenuItem";
import { MenuSeparator } from "../MenuSeparator";
import "./style.css";

export const Menu = ({
  className,
  text = "Heading",
  menuItemLabel = "Menu Label",
  menuItemLabel1 = "Menu Label",
  menuItemLabel2 = "Menu Label",
  menuItemLabel3 = "Menu Label",
  menuItemLabel4 = "Menu Label",
  menuItemDescription = "Menu description.",
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className="menu-header">
        <div className="heading">{text}</div>
        <div className="text-wrapper">{text}</div>
      </div>
      <MenuSeparator className="menu-separator-instance" />
      <div className="menu-section">
        <MenuItem
          className="menu-item-instance"
          description="Menu description."
          label={menuItemLabel}
          stateProp="default"
        />
        <MenuItem
          className="design-component-instance-node"
          description="Menu description."
          label={menuItemLabel1}
          stateProp="default"
        />
        <MenuItem
          className="design-component-instance-node"
          description="Menu description."
          label={menuItemLabel2}
          stateProp="default"
        />
      </div>
      <MenuSeparator className="design-component-instance-node" />
      <div className="div">
        <MenuItem
          className="design-component-instance-node"
          description="Menu description."
          label={menuItemLabel3}
          stateProp="default"
        />
        <MenuItem
          className="menu-item-instance"
          description={menuItemDescription}
          label={menuItemLabel4}
          stateProp="default"
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  text: PropTypes.string,
  menuItemLabel: PropTypes.string,
  menuItemLabel1: PropTypes.string,
  menuItemLabel2: PropTypes.string,
  menuItemLabel3: PropTypes.string,
  menuItemLabel4: PropTypes.string,
  menuItemDescription: PropTypes.string,
};
