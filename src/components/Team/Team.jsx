import React from "react";
import Back from "../common/back/Back";
import Tc from "./Tc";
import "./team.css";

const Team = () => {
  return (
    <>
      <Back title={"Team"}></Back>
      <section className="tm padding">
        <div className="container grid">
          <Tc></Tc>
        </div>
      </section>
    </>
  );
};

export default Team;
