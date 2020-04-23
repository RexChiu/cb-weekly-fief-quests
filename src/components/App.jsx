import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "./firebase";
import Home from "./Home.jsx";
import Input from "./Input.jsx";
import { OstariaDataReset } from "../constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      isLoaded: false
    };

    this._resetData = this._resetData.bind(this);
  }

  componentDidMount() {
    const onSuccess = snap => {
      this.setState({ data: snap.val(), isLoaded: true });
    };
    const onFailure = () => {
      alert("Unable to retrieve data!");
    };
    this.props.firebase.db.ref("data").on("value", onSuccess, onFailure);
  }

  render() {
    const { data, isLoaded } = this.state;
    return isLoaded ? (
      <Router>
        <div>
          <Route path="/" exact component={() => <Home data={data} />} />
          <Route
            path="/input"
            component={() => <Input data={data} resetData={this._resetData} />}
          />
        </div>
      </Router>
    ) : null;
  }

  _resetData() {
    this.props.firebase.db.ref("data").set(OstariaDataReset);
  }
}

export default withFirebase(App);
