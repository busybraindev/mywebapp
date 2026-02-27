import React from "react";
import { Awp } from "../../Dm";

const Aw = () => {
  return (
    <>
      <section className="aw">
        <div className="container grid">
          {Awp.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img className="im" src={val.cover}></img>
                </div>
                <div className="text vb">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Aw;
