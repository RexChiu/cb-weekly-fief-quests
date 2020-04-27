import React from "react";
import FiefInput from "./FiefInput.jsx";
import {
  OstariaDirections,
  directionNames,
  OstariaDisplayOrder,
} from "../constants";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this._renderDirection = this._renderDirection.bind(this);
    this._renderInputs = this._renderInputs.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.resetData}>Reset Data</button>
        {this._renderInputs()}
      </div>
    );
  }

  _renderInputs() {
    return OstariaDirections.map((direction) => {
      return (
        <div key={direction}>
          <h2>{directionNames[direction]}</h2>
          {this._renderDirection(direction)}
        </div>
      );
    });
  }

  _renderDirection(direction) {
    let directionFiefs = Object.keys(OstariaDisplayOrder[direction]);
    return directionFiefs.map((fief) => {
      return (
        <FiefInput
          direction={direction}
          name={fief}
          key={fief}
          data={this.props.data[fief]}
        />
      );
    });
  }
}

export default Input;
