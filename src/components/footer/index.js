import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer fixed-bottom font-small special-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/SomayyahMaqsudi"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/somayyah-maqsudi-69ba5825b/"
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
