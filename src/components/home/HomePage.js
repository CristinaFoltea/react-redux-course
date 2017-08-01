import React from "react";
import { Link } from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="about" className="btn btn-primary btn-large">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
