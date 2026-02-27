import React from "react";
import Title from "../../common/title/Title";
import { tt } from "../../../Dm";
import "./style.css";

const Test = () => {
  return (
    <>
      <section className="tl">
        <div className="container">
          <Title sb={"testimonal"} tt={"our successful students"}></Title>
          <div className="content grid2">
            {tt.map((val) => {
              return (
                <div className="items shadow">
                  <div className="box fl">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-quote-left ic"></i>
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.title}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
