import React, { Component } from "react";
import "./css/app.css";
import SideMenu from "./components/SideMenu";
import Schedules from "./components/Schedules";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Noémie's scheduler</h1>
        </header>
        <SideMenu />
        <Schedules />
      </div>
    );
  }
}

export default App;
