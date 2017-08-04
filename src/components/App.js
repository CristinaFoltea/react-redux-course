import React, { PropTypes } from "react";
import { Link } from "react-router";
import Header from "./common/Header";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header
            loading={this.props.loading}
          />
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
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    loading: state.ajaxStatus > 0
  }
}

export default connect(mapStateToProps)(App);
