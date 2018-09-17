import React, { Component } from "react";
import "../css/schedules.css";
import time from "../params/time.js";

class Schedules extends Component {
  renderGap = () => {
    const { start, end, gap } = time;
    const numberGaps = ((end - start) * 60) / gap;
    const height = Math.floor(1000 / numberGaps);
    for (let i = 0; i < numberGaps; i++) {
      const totalMinutes = start * 60 + i * gap;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      {
        <div class="gap" style={{ height: height }}>
          {hours}:{minutes}
        </div>;
      }
    }
  };
  render() {
    return <div className="schedules">{this.renderGap()}</div>;
  }
}

export default Schedules;
