import React from "react";
import { withFirebase } from "./firebase";

class FiefInput extends React.Component {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

export default withFirebase(FiefInput);
