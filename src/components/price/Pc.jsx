import React from "react";
import { Pm } from "../../Dm";

const Pc = () => {
  return (
    <>
      {Pm.map((val) => {
        return (
          <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
              <span>$</span>
              {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className="otp btn">GET STARTED</button>
          </div>
        );
      })}
    </>
  );
};

export default Pc;
