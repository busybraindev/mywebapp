import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              sb="WELCOME TO MUBARAK ACADEMICS"
              tt="Best Online Education"
            ></Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sunt magnam ipsam in cupiditate! Repellendus deleniti error,
              officiis temporibus aperiam provident itaque magnam earum,
              accusamus veritatis ab quia adipisci at?
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="btn">
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
