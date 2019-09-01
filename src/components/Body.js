import React, { Component } from "react";
import CardColumn1 from "./CardColumn1";
import CardColumn2 from "./CardColumn2";
import CardColumn3 from "./CardColumn3";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <CardColumn1 />
        <CardColumn2 />
        <CardColumn3 />
      </div>
    );
  }
}
