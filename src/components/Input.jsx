import React from "react";
import FiefInput from "./FiefInput.jsx";
import {
  LiangyunDirections,
  directionNames,
  LiangyunDisplayOrder
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
        {this._renderInputs()}
        <button onClick={this.props.resetData}>Reset Data</button>
      </div>
    );
  }

  _renderInputs() {
    return LiangyunDirections.map(direction => {
      return (
        <div key={direction}>
          <h2>{directionNames[direction]}</h2>
          {this._renderDirection(direction)}
        </div>
      );
    });
  }

  _renderDirection(direction) {
    let directionFiefs = Object.keys(LiangyunDisplayOrder[direction]);
    return directionFiefs.map(fief => {
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
