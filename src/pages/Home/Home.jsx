
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/FontAwesome-6.2-PRO/css/all.css";


// import component
import Sidebar from "../../components/Sidebar/SideBar";
import Header from "../../container/Header/Header";
import About from "../../container/About/About";
import Education from "../../container/Education/Education";
import Experience from "../../container/Experience/Experience";
import Skill from "../../container/Skills/Skill";

import { getAllDataAbout } from "../../data/ApiAbout";


import styles from "./Home.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Home = () => {
  const [dataAbout, setDataAbout] = useState({})
  function getDataAbout() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataAbout());
    });
  }
  useEffect(() => {
    getDataAbout()
      .then((data) => {
        setDataAbout(data[0])
      })
  }, [])
  return (
    <div className={`${cx("Home")} ${"grid"}`}>
        <Header />
        <About  />
        <Skill />
        <Experience />
        <Education />
        <div className={`${cx("Footer")} ${"row"}`}>
          <div className={`${cx("Footer__Content")} ${"col l-12 m-12 c-12"}`}>
            Copyright &copy; 2023 - Created by <a href={dataAbout.website} target="_blank" rel="noreferrer">Nguyen Hoang Ha</a> Powered by <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noreferrer">MernStack</a>
          </div>
        </div>
    </div>
  )
}

export default Home