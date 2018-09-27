import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    const active = {
      fontWeight: "bold",
      color: "red"
    };

    const header = {
      display: "flex",
      justifyContent: "space-evenly",
      listStyle: "none"
    };

    return (
      <div style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/create-push" activeStyle={this.active}>
          Posts
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
