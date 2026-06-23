import React from "react";
import Bc from "./Bc";
import "./bl.css";
import Back from "../common/back/Back";

const Blog = () => {
  return (
    <>
      <Back title={"Blog Posts"}></Back>
      <div>
        <section className="blog padding">
          <div className="container grid2">
            <Bc></Bc>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
