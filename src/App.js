import React from "react";
import Box from "./components/Box";
import "./style/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor(props) {
    super(props);

    // state status
    this.state = {
      water: 0,
      heart: 100,
      temperature: -10,
      steps: 30000,
    };
  }

  onHeartChange = (e) => {
    console.log(e);
    this.setState = { state: e };
  };

  calculateWater = () => {
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row"></div>

        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />

          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min="heartMin"
            max="heartMax"
            onChange={this.onHeartChange}
          />

          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
