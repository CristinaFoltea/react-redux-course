import React, { PropTypes } from "react";
import { Link } from "react-router";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        {this.props.children}
        <div>
          <h1>Footer here</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
