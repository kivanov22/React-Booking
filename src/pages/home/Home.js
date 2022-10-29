import React from "react";
import Featured from "../../components/Featured/Featured.js";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties.js";
import { Header } from "../../components/Header/Header.js";
import { Navbar } from "../../components/Navbar/Navbar.js";
import PropertyList from "../../components/PropertyList/PropertyList.js";
import "./Home.scss";

export const Home = () => {
  return <div className="">
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browese by property type</h1>
      <PropertyList />
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties />
    </div>
  </div>;
};
