import React from "react";
import Title from "../common/title/Title";
import { Jn } from "../../Dm";

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Title sb={"our blog"} tt={"recent from blog"}></Title>
          <div className="grid2">
            {Jn.slice(0, 3).map((val) => {
              return (
                <div className="items shadow1">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="admin">
                      <div className="sm">
                        <i className="fa fa-user"></i>
                        <label className="rd" htmlFor="">
                          {val.type}
                        </label>
                      </div>
                      <div className="sm">
                        <i className="fa fa-calendar-alt"></i>
                        <label className="rd" htmlFor="">
                          {val.date}
                        </label>
                      </div>
                      <div className="sm">
                        <i className="fa fa-comments"></i>
                        <label htmlFor="" className="rd">
                          {val.com}
                        </label>
                      </div>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
