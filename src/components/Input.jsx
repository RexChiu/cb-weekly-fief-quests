import React from "react";
import FiefInput from "./FiefInput.jsx";
import { directions, directionNames, dataReset } from "../constants";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this._resetData = this._resetData.bind(this);
    this._renderDirection = this._renderDirection.bind(this);
    this._renderInputs = this._renderInputs.bind(this);
  }

  render() {
    return (
      <div>
        {this._renderInputs()}
        {/* <button onClick={this._resetData}>Reset Data</button> */}
      </div>
    );
  }

  _resetData() {
    this.props.firebase.db.ref("data").set(dataReset);
  }

  _renderInputs() {
    return directions.map(direction => {
      return (
        <div key={direction}>
          <h2>{directionNames[direction]}</h2>
          {this._renderDirection(direction)}
        </div>
      );
    });
  }

  _renderDirection(direction) {
    const directionData = this.props.data[direction];
    const keys = Object.keys(directionData);
    return keys.map(key => {
      return (
        <FiefInput
          direction={direction}
          name={key}
          key={key}
          data={directionData[key]}
        />
      );
    });
  }
}

export default Input;
