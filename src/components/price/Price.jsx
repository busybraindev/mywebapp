import React from "react";
import Back from ".././common/back/Back";
import Pc from "./Pc";
import "./pc.css";
import Faq from "./Faq";

const Price = () => {
  return (
    <>
      <Back title={"Choose The Right Plan"}></Back>
      <section className="price padding">
        <div className="container grid">
          <Pc></Pc>
        </div>
      </section>
      <div className="st">
        <Faq></Faq>
      </div>
    </>
  );
};

export default Price;
