import React from "react";
import Pc from "../price/Pc";
import Title from "../common/title/Title";

const Hp = () => {
  return (
    <>
      <section className="hp padding">
        <Title sb={"our pricing"} tt={"pricing & packages"}></Title>
        <div className=" price container grid">
          <Pc></Pc>
        </div>
      </section>
    </>
  );
};

export default Hp;
