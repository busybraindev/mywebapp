import React from "react";

const Title = ({ sb, tt }) => {
  return (
    <>
      <div id="heading">
        <h3>{sb}</h3>
        <h1>{tt}</h1>
      </div>
    </>
  );
};

export default Title;
