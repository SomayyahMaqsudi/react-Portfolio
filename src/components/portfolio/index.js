import React from "react";

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <div className="card-group mt-3">
        <div className="card border border-dark">
          <img
            style={{ width: "485px" }}
            src="link to the pic of first project"
            className="card-img-top"
            alt="Wellness Check"
          />
          <div className="card-body">
            <h5 className="card-title">Wellness Check</h5>
            <p className="card-text">Explain about wellness check</p>
            <a
              href="github link to the wellness"
              className="btn btn-primary"
            >
              <i className="fas fa-clone mr-1"></i>
              View Project
            </a>
          </div>
        </div>

        <div className="card border border-dark">
          <img
            style={{ width: "485px" }}
            src="link to the pic of second project"
            className="card-img-top"
            alt="Wellness Check"
          />
          <div className="card-body">
            <h5 className="card-title">Wellness Check</h5>
            <p className="card-text">Explain about wellness check</p>
            <a
              href="github link to the wellness"
              className="btn btn-primary"
            >
              <i className="fas fa-clone mr-1"></i>
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
