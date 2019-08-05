import React from "react";
import { withFirebase } from "./firebase";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { questLevels, materials, materialCount } from "../constants";

class FiefInput extends React.Component {
  constructor(props) {
    super(props);

    this._onLevelChange = this._onLevelChange.bind(this);
    this._onMaterialChange = this._onMaterialChange.bind(this);
    this._onMaterialCountChange = this._onMaterialCountChange.bind(this);
  }
  state = {
    level: undefined,
    material: undefined,
    materialCount: undefined
  };

  render() {
    const { name, data } = this.props;
    return (
      <div>
        <div className="row">
          <h3>{name}</h3>
        </div>
        <div className="row">
          <div className="col-xs-1">
            <div className="box">
              <Select
                placeholder="Level"
                options={this._optionify(questLevels)}
                onChange={this._onLevelChange}
              />
            </div>
          </div>
          <div className="col-xs-3">
            <div className="box">
              <Select
                placeholder="Material"
                options={this._optionify(materials)}
              />
            </div>
          </div>
          <div className="col-xs-1">
            <div className="box">
              <Creatable
                placeholder="Count"
                options={this._optionify(materialCount)}
              />
            </div>
          </div>
          <div className="col-xs-1">
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }

  _optionify(options) {
    return options.map(option => {
      return {
        label: option,
        value: option
      };
    });
  }

  _onLevelChange(event) {
    this.setState({
      level: event.value
    });
  }

  _onMaterialChange(event) {
    this.setState({
      material: event.value
    });
  }

  _onMaterialCountChange(event) {
    this.setState({
      materialCount: event.value
    });
  }
}

export default withFirebase(FiefInput);
