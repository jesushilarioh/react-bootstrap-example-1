import React, { Component } from "react";

export default class CardColumn1 extends Component {
  render() {
    return (
      <div className="row mt-3  mb-3">
        <div className="col-md-4">
          <div className="card">
            {/* <img src="" className="card-img-top" alt=""> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-secondary">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
