import React, { Component, Fragment } from "react";
import "../css/type.css";
import Service from "./Service";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  onClick = () => this.setState(prevState => ({ open: !prevState.open }));
  render() {
    const { type, services } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <div className="type" onClick={this.onClick}>
          {type}
        </div>
        {open && services.map(service => <Service {...service} />)}
      </Fragment>
    );
  }
}

export default Type;
