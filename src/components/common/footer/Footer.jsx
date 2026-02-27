import React from "react";
import "./fc.css";
import { Jn } from "../../../Dm";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container fl">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest updates</h1>
            <span>far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>MUBARAK</h1>
            <span>online education & learning</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              omnis ullam, qui nulla debitis excepturi minima illum expedita
              eaque labore similique adipisci fugiat quos, perspiciatis
              exercitationem vitae. Similique, quaerat vitae.
            </p>
            <div className="ds">
              <i className="fab fa-facebook ic"></i>
              <i className="fab fa-instagram ic"></i>
              <i className="fab fa-twitter ic"></i>
              <i className="fab fa-youtube ic"></i>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {Jn.slice(0, 3).map((val) => {
              return (
                <div className="items fl">
                  <div className="img">
                    <img src={val.cover}></img>
                  </div>
                  <div className="text1">
                    <span>
                      <i className="fa fa-user"></i>
                      <label className="rd" htmlFor="">
                        {val.type}
                      </label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label className="rd" htmlFor="">
                        {val.date}
                      </label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                17, oke-sobi ogbagba, Osun State
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                09041571554
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                Mubarakadeyemi94@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright @2026 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Mustapha Muabarak
        </p>
      </div>
    </>
  );
};

export default Footer;
