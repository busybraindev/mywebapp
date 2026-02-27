import React from "react";
import Header from "./components/common/Heading/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Ch from "./components/Allcourses/Ch";
import Team from "./components/Team/Team";
import Price from "./components/price/Price";
import Blog from "./components/blog/Blog";
import Cn from "./components/contact/Cn";
import Footer from "./components/common/footer/footer";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ab" element={<About></About>}></Route>
          <Route path="/cs" element={<Ch></Ch>}></Route>
          <Route path="/tm" element={<Team></Team>}></Route>
          <Route path="/pc" element={<Price></Price>}></Route>
          <Route path="/jn" element={<Blog></Blog>}></Route>
          <Route path="/ct" element={<Cn></Cn>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
