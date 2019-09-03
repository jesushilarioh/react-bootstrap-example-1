import React, { Component } from "react";
import CardColumn1 from "./CardColumn1";
import CardColumn2 from "./CardColumn2";
import CardColumn3 from "./CardColumn3";
import PropTypes from 'prop-types'

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.quotes.map(quote => (
            <CardColumn2 quote={quote} key={ quote.id } />
          ))}
        </div>
        <CardColumn1 />
        <CardColumn3 />
      </div>
    );
  }
}

Body.propTypes = {
  quotes: PropTypes.array.isRequired
}
