import React, { Component } from "react";
import "../css/services.css";
import serviceTypes from "../params/serviceTypes.js";
import Type from "./Type";

class Services extends Component {
  render() {
    return (
      <div className="services">
        {serviceTypes.map(type => (
          <Type {...type} />
        ))}
      </div>
    );
  }
}

export default Services;
