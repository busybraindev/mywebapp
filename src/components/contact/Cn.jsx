import React from "react";
import Back from "../common/back/Back";
import "./cn.css";

const Cn = () => {
  const data =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012564.3747313848!2d3.8957196606635263!3d7.5389874712423595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381b1492f19919%3A0x4444a9d7e31afcd3!2sOsun!5e0!3m2!1sen!2sng!4v1768978805217!5m2!1sen!2sng";
  return (
    <>
      <Back title={"Contact us"}></Back>
      <div className="contact padding">
        <div className="container shadow flex">
          <div className="left row">
            <iframe src={data}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              cum porro quibusdam alias mollitia, molestias quasi repellendus
              dolore sit id eum exercitationem laboriosam accusantium ea tempora
              corrupti commodi? Debitis, quis?
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>17,oke-sobi,ogbagba, Okesobi state</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>Mubarakadeyemi94@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>09041571554</p>
              </div>
            </div>
            <form action="">
              <div className="fl">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols={"30"} rows={"10"}>
                Create a message here...
              </textarea>
              <button className="primary-btn btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cn;
