import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md">
            <div className="card mb-3">
              <div className="card-header">Quote</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
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

          <div className="col-md">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container mt-5 mb-5">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mb-3">
            <div className="row">
              <div className="col-md mb-3">
                <div className="card text-white bg-info mb-3">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Info card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Secondary card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-light mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Magnam consequatur excepturi
                  tempora delectus recusandae laboriosam nostrum laborum amet
                  illum placeat itaque alias ullam eius, iusto cumque quis
                  ratione voluptatibus quae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Possimus dolore officiis
                  delectus ipsum assumenda vel! Deleniti illo pariatur ad ab
                  quod consequatur maxime. Nesciunt dolores nemo accusantium
                  sequi alias rem?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore mollitia ipsum, illum error assumenda molestiae
                  perferendis a ipsa illo possimus quo architecto quidem quia
                  nulla officiis in optio quam tenetur? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Saepe minima esse, ducimus
                  at nesciunt natus in aliquam odit! Nesciunt architecto optio
                  accusamus officia vitae veritatis numquam, amet minus
                  laboriosam magni? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, sequi quisquam ipsum fuga
                  temporibus consequatur quia neque ex! Voluptates doloremque ab
                  eius tenetur totam illum dicta blanditiis ipsum cumque.
                  Facilis. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Eius aut similique culpa aliquam nemo nisi adipisci
                  doloribus doloremque illum hic! Quisquam, laborum temporibus.
                  Quo cumque deleniti, error illum aliquam architecto!
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
