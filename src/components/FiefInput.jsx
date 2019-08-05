import React from "react";
import { withFirebase } from "./firebase";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { questLevels, materials, materialCount } from "../constants";

class FiefInput extends React.Component {
  state = {
    questLevel: undefined,
    questName: undefined,
    questCount: undefined
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
}

export default withFirebase(FiefInput);
