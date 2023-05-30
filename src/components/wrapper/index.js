import React from "react";

const Wrapper = (props) => {
//  console.log("Props: ", props);  // --> { stuff: "bingo" }
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;
