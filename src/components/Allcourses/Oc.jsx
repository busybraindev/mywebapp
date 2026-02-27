import React from "react";
import Title from ".././common/title/Title";
import { Ol } from "../../Dm";

const Oc = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title sb="COURSES" tt="Browse Our Online Courses"></Title>
          <div className="content grid3">
            {Ol.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h1>{val.coursesName}</h1>
                  <span>{val.course}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Oc;
