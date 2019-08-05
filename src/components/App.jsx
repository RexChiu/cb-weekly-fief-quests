import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "./firebase";
import Home from "./Home.jsx";
import Input from "./Input.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined
    };
  }

  componentDidMount() {
    this.props.firebase.db
      .ref("data")
      .once("value")
      .then(snap => {
        this.setState({ data: snap.val(), isLoaded: true });
      })
      .catch(() => alert("Failed to retrieve data!"));
  }

  render() {
    const { data, isLoaded } = this.state;
    return isLoaded ? (
      <Router>
        <div>
          <Route path="/" exact component={() => <Home data={data} />} />
          <Route path="/input" component={() => <Input data={data} />} />
        </div>
      </Router>
    ) : null;
  }
}

export default withFirebase(App);
