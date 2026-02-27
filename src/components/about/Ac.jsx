import React from "react";
import im from "../.././images/pc.jpg";
import Title from "../common/title/Title";
import { homeAbout } from "../../Dm";
import Aw from "./Aw";

const Ac = () => {
  return (
    <>
      <section className="ab">
        <div className="container fl">
          <div className="left row">
            <img src={im}></img>
          </div>
          <div className="right row">
            <Title
              sb={"LEARN ANYTHING"}
              tt={"Benefits About Online Learning Expertise"}
            ></Title>
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item fl">
                  <div className="img">
                    <img className="im" src={val.cover}></img>
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Aw></Aw>
    </>
  );
};

export default Ac;
