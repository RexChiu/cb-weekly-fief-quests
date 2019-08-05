import React from "react";
import { directions, directionNames, displayOrder } from "../constants";

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
    const { threeStarQuests, fourStarQuests, fiveStarQuests } = this.state;
    const { data } = this.props;
    return (
      <>
        <h2>Five Star Fief Quests</h2>
        {this._renderStarQuests(fiveStarQuests, data)}
        <h2>Four Star Fief Quests</h2>
        {this._renderStarQuests(fourStarQuests, data)}
        <h2>Three Star Fief Quests</h2>
        {this._renderStarQuests(threeStarQuests, data)}
      </>
    );
  }

  _renderStarQuests(quests, data) {
    return directions.map(direction => {
      return Object.values(displayOrder[direction]).map(fief => {
        if (quests[fief]) {
          return (
            <div key={fief}>
              <div className="container">
                <h4>
                  {fief} - {directionNames[data[fief].direction]}
                </h4>
              </div>
              <div className="container">
                {this._renderQuests(quests[fief])}
              </div>
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
        <div className="row" key={quest}>
          <div className="col-xs-12">{`${quests[quest].materialCount} ${
            quests[quest].material
          }`}</div>
        </div>
      );
    }
    return renderedQuests;
  }

  _parseData(data) {
    let fiveStarQuests = {};
    let fourStarQuests = {};
    let threeStarQuests = {};

    for (let fief in data) {
      for (let quest in data[fief]) {
        // if quest is a string, it is not a quest
        if (typeof data[fief][quest] === "string") {
          continue;
        }
        // groups the quests into 3, 4, or 5 stars
        switch (data[fief][quest].level) {
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
