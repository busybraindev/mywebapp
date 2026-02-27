import React, { useState } from "react";
import Title from "../common/title/Title";
import { Fq } from "../../Dm";

const Faq = () => {
  const [cl, scl] = useState(false);
  const tg = (index) => {
    if (cl === index) {
      return scl(null);
    }
    scl(index);
  };
  return (
    <>
      <Title sb={"FAQS"} tt={"Frequently Ask Questions"}></Title>
      <section className="faq">
        <div className="container">
          {Fq.map((val, i) => {
            return (
              <div className="box">
                <button className="acc" onClick={() => tg(i)}>
                  <h2>{val.title}</h2>
                  <span>
                    {cl === i ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {cl === i ? (
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
