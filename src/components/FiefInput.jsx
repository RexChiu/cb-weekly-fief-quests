import React from "react";
import { withFirebase } from "./firebase";
import Select from "react-select";
import {
  questLevels,
  materials,
  materialsCountMap,
  rarityColours,
} from "../constants";
import FiefQuests from "./FiefQuests.jsx";

class FiefInput extends React.Component {
  constructor(props) {
    super(props);

    this._onLevelChange = this._onLevelChange.bind(this);
    this._onMaterialChange = this._onMaterialChange.bind(this);
    this._onMaterialCountChange = this._onMaterialCountChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._deleteQuest = this._deleteQuest.bind(this);
  }
  state = {
    level: "",
    material: "",
    materialCount: "",
  };

  render() {
    const { name, data } = this.props;
    const { level, material, materialCount } = this.state;
    let placeholderValue = "";
    if (level && material) {
      placeholderValue = materialsCountMap[material][level];
    }

    const colourStyles = {
      option: (styles, { data }) => {
        const rarity = data.rarity;
        return {
          ...styles,
          color: rarity ? rarityColours[rarity] : "#000000",
        };
      },
    };

    return (
      <div>
        <div className="row">
          <h3>{name}</h3>
        </div>
        <FiefQuests data={data} onDelete={this._deleteQuest} />
        <form onSubmit={this._onSubmit} className="row">
          <div className="col-xs-1">
            <div className="box">
              <Select
                placeholder="Level"
                options={this._optionifyQuest(questLevels)}
                onChange={this._onLevelChange}
              />
            </div>
          </div>
          <div className="col-xs-3">
            <div className="box">
              <Select
                placeholder="Material"
                options={this._optionifyMaterial(materials)}
                onChange={this._onMaterialChange}
                styles={colourStyles}
              />
            </div>
          </div>
          <div className="col-xs-1">
            <div className="box">
              <input
                name="materialCount"
                placeholder="Count"
                value={materialCount || placeholderValue}
                onChange={this._onMaterialCountChange}
              />
            </div>
          </div>
          <div className="col-xs-1">
            <button>Add</button>
          </div>
        </form>
      </div>
    );
  }

  _optionifyQuest(options) {
    return options.map((option) => {
      return {
        label: option,
        value: option,
      };
    });
  }

  _optionifyMaterial(options) {
    return options.map((option) => {
      return {
        label: option.name,
        value: option.name,
        rarity: option.rarity,
      };
    });
  }

  _onLevelChange(event) {
    this.setState({
      level: event.value,
    });
  }

  _onMaterialChange(event) {
    this.setState({
      material: event.value,
    });
  }

  _onMaterialCountChange(event) {
    this.setState({
      materialCount: event.target.value,
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    const { name } = this.props;
    const { level, material, materialCount } = this.state;
    if (
      !level ||
      !material ||
      (!event.target.materialCount.value && !materialCount)
    ) {
      alert("Form cannot be empty!");
      return;
    }

    this.props.firebase.db.ref(`data/${name}`).push({
      level: level,
      material: material,
      materialCount: materialCount || event.target.materialCount.value,
    });
  }

  _deleteQuest(key) {
    const { name } = this.props;
    this.props.firebase.db.ref(`data/${name}/${key}`).remove();
  }
}

export default withFirebase(FiefInput);
