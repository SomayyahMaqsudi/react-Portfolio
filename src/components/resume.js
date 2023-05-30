import React from "react";
import resumePDF from "../assets/resume.pdf"; //Have to add my resume

const Resume = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <embed src={resumePDF} width="100%" height="750px" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
