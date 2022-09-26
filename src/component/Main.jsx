import React from "react";
import TopMenu from "./TopMenu";
import Page01 from "./Page01";
import Page02 from "./Page02";
import "../style/Main.css";

const Main = () => {
  return (
    <section className="MovieMainCon">
      <nav className="MainNav">
        <TopMenu />
        <div className="Line" />
        <div className="Mainspace" />
        <Page01 />
        <div className="Mainspace" />
        <div className="Line" />
        <div className="Mainspace" />
        <Page02 />
        <div className="Mainspace" />
        <div className="Mainspace" />
      </nav>
    </section>
  );
};

export default Main;
