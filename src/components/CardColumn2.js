import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CardColumn2 extends Component {
  render() {
    const quote = this.props.quote;

    return (
      <div className="col-lg-4 col-md-6">
        <div className="card mb-2 mt-2">
          <div className="card-header">Quote #{quote.id}</div>
          <div className="card-body">
            <blockquote className="blockquote">
              <p>{quote.body}</p>
              <footer className="blockquote-footer">
                {quote.author}, <cite title="Source Title">{quote.title}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

CardColumn2.propTypes = {
  quote: PropTypes.object.isRequired
}
