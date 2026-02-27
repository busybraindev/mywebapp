import React from "react";
import Back from "../common/back/Back";
import Cc from "./Cc";
import Oc from "./Oc";

const Ch = () => {
  return (
    <>
      <Back title={"Explore Courses"}></Back>
      <div className="top">
        <Cc></Cc>
        <Oc></Oc>
      </div>
    </>
  );
};

export default Ch;
