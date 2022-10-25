import React from "react";
import Featured from "../../components/Featured/Featured.js";
import { Header } from "../../components/Header/Header.js";
import { Navbar } from "../../components/Navbar/Navbar.js";
import "./Home.scss";

export const Home = () => {
  return <div className="">
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
    </div>
  </div>;
};
