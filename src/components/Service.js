import React, { Component } from "react";
import "../css/service.css";
import ReactTooltip from "react-tooltip";

class Service extends Component {
  render() {
    const { duration, label, price } = this.props;
    return (
      <div className="service">
        <div data-tip>{label}</div>
        <ReactTooltip>
          <div>{duration} minutes</div>
          <div>{price} €</div>
        </ReactTooltip>
      </div>
    );
  }
}

export default Service;
