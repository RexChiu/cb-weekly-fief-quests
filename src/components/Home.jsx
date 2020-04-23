import React from "react";
import {
  OstariaDirections,
  directionNames,
  OstariaDisplayOrder
} from "../constants";

class Home extends React.Component {
  constructor(props) {
    super(props);

    let parsedData = this._parseData(props.data);
    this.state = {
      ...parsedData
    };

    this._parseData = this._parseData.bind(this);
  }
  render() {
    const {
      twoStarQuests,
      threeStarQuests,
      fourStarQuests,
      fiveStarQuests
    } = this.state;
    const { data } = this.props;
    return (
      <>
        <u>
          <h2>Five Star Fief Quests</h2>
        </u>
        {this._renderStarQuests(fiveStarQuests, data)}
        <u>
          <h2>Four Star Fief Quests</h2>
        </u>
        {this._renderStarQuests(fourStarQuests, data)}
        <u>
          <h2>Three Star Fief Quests</h2>
        </u>
        {this._renderStarQuests(threeStarQuests, data)}
        <u>
          <h2>Two Star Fief Quests</h2>
        </u>
        {this._renderStarQuests(twoStarQuests, data)}
      </>
    );
  }

  _renderStarQuests(quests, data) {
    return OstariaDirections.map(direction => {
      return Object.values(OstariaDisplayOrder[direction]).map(fief => {
        if (quests[fief]) {
          return (
            <div key={fief}>
              {fief} - {this._renderQuests(quests[fief])} -{" "}
              {directionNames[data[fief].direction]}
            </div>
          );
        } else {
          return null;
        }
      });
    });
  }

  _renderQuests(quests) {
    let renderedQuests = [];
    for (let quest in quests) {
      renderedQuests.push(
        `${quests[quest].materialCount} ${quests[quest].material}`
      );
    }
    return renderedQuests.join(", ");
  }

  _parseData(data) {
    let fiveStarQuests = {};
    let fourStarQuests = {};
    let threeStarQuests = {};
    let twoStarQuests = {};

    for (let fief in data) {
      for (let quest in data[fief]) {
        // if quest is a string, it is not a quest
        if (typeof data[fief][quest] === "string") {
          continue;
        }
        // groups the quests into 3, 4, or 5 stars
        switch (data[fief][quest].level) {
          case 2:
            this._addToQuests(twoStarQuests, fief, quest, data[fief][quest]);
            break;
          case 3:
            this._addToQuests(threeStarQuests, fief, quest, data[fief][quest]);
            break;
          case 4:
            this._addToQuests(fourStarQuests, fief, quest, data[fief][quest]);
            break;
          case 5:
            this._addToQuests(fiveStarQuests, fief, quest, data[fief][quest]);
            break;
          default:
            break;
        }
      }
    }

    return {
      twoStarQuests: twoStarQuests,
      threeStarQuests: threeStarQuests,
      fourStarQuests: fourStarQuests,
      fiveStarQuests: fiveStarQuests
    };
  }

  _addToQuests(quests, fief, id, quest) {
    if (!quests[fief]) {
      quests[fief] = {};
    }

    quests[fief][id] = quest;
  }
}

export default Home;
