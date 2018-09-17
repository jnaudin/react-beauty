import React, { Component } from "react";
import "../css/sideMenu.css";
import Services from "./Services";

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <Services />
      </div>
    );
  }
}

export default SideMenu;
