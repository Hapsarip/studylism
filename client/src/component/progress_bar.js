import React from "react";

const progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "1000px",
    backgroundColor: "lightyellow",
    borderColor: "#000000",
    borderRadius: 40,
    margin: 25,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#377DC3",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default progress_bar;
