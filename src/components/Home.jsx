import React from "react";

class Home extends React.Component {
  render() {
    const { data } = this.props;
    return JSON.stringify(data) || null;
  }
}

export default Home;
