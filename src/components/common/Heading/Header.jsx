import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [cl, scl] = useState(false);
  return (
    <>
      <Head></Head>
      <header>
        <nav className="fl">
          <ul className={cl ? "mb" : "fl"} onClick={() => scl(false)}>
            <li>
              <Link to="/" className="lk">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cs" className="lk">
                All Courses
              </Link>
            </li>
            <li>
              <Link to="/ab" className="lk">
                About
              </Link>
            </li>
            <li>
              <Link to="/tm" className="lk">
                Team
              </Link>
            </li>
            <li>
              <Link to="/pc" className="lk">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/jn" className="lk">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/ct" className="lk">
                Contact
              </Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => scl(!cl)}>
            {cl ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
