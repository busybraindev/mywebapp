import React from "react";
import { Cd } from "../../Dm";
import Title from "../common/title/Title";
import Oc from "../Allcourses/Oc";

const Hb = () => {
  return (
    <>
      <section className="hb">
        <div className="container">
          <Title
            sb={"our courses"}
            tt={"explore our popular online courses"}
          ></Title>
          <div className="cc">
            <div className="grid">
              {Cd.slice(0, 3).map((val) => {
                return (
                  <div className="items">
                    <div className="flex">
                      <div className="left">
                        <div className="img">
                          <img src={val.cover}></img>
                        </div>
                      </div>
                      <div className="text">
                        <h1>{val.CoursesName}</h1>
                      </div>
                    </div>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                      {val.CourseTeacher.map((data) => {
                        return (
                          <>
                            <div className="box">
                              <div className="dimg">
                                <img src={data.dcover}></img>
                              </div>
                              <div className="para">
                                <h4>{data.name}</h4>
                              </div>
                            </div>
                            <span>{data.totalTime}</span>
                          </>
                        );
                      })}
                    </div>

                    <div className="price">
                      <h3>
                        {" "}
                        {val.priceAll}/{val.pricePer}
                      </h3>
                    </div>
                    <button className="ot btn">ENROLL NOW!</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Oc></Oc>
    </>
  );
};

export default Hb;
