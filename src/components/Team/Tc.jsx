import React from "react";
import { Tm } from "../../Dm";

const Tc = () => {
  return (
    <>
      {Tm.map((val) => {
        return (
          <div className="items shadow">
            <div className="img">
              <img src={val.cover} alt="" />
              <div className="overlay">
                <i className="fab fa-facebook ic"></i>
                <i className="fab fa-instagram ic"></i>
                <i className="fab fa-twitter ic"></i>
                <i className="fab fa-youtube ic"></i>
              </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tc;
