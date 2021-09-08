import React from "react";
import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <Link to="/projet">Projet</Link>
      </div>
    );
  }
}

export default HomeScreen;
