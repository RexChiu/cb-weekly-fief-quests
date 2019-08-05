import React from "react";

class FiefQuests extends React.Component {
  render() {
    const { data } = this.props;
    let parsedData = [];
    for (let quest in data) {
      // if type is a string, then there is no data
      if (typeof data[quest] === "string") {
        continue;
      }
      parsedData.push({
        key: quest,
        ...data[quest]
      });
    }

    return this._renderQuests(parsedData);
  }

  _renderQuests(data) {
    if (!data) {
      return null;
    }

    return data.map(quest => {
      return (
        <div className="row">
          {quest.level}* - {quest.material} x{quest.materialCount}
          <div className="col-xs-1">
            <button onClick={() => this.props.onDelete(quest.key)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
  }
}

export default FiefQuests;
