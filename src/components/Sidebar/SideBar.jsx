import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getAllDataHeader } from "../../data/ApiHeader";

import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const SideBar = () => {
  const [dataHeader, setDataHeader] = useState([])
  function getDataHeader() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataHeader());
    });
  }
  useEffect(() => {
    getDataHeader()
      .then((data) => {
        setDataHeader(data[0])

      })
  }, [])
  return (
    <div className={`${cx("SideBar")} ${"row"}`}>
      <div className={`${cx("SideBar__Exit")} ${"col l-8 m-7 c-5"}`}>

      </div>
      <div className={`${cx("SideBar__Detail")} ${"col l-4 m-5 c-7"}`}>

        {/* ========================Header SideBar=================================== */}
        <div className={`${cx("SideBar__Header")} ${"row"}`}>
          <div className={`${cx("SideBar__Header--Icon-Close")} ${"col l-2 m-2 c-2"}`}>
            <i className="fa-regular fa-bars"></i>
          </div>
          <div className={`${cx("SideBar__Header--Name")} ${"col l-8 m-8 c-8"}`}>
            {dataHeader.name}
          </div>
          <div className={`${cx("SideBar__Header--Icon-User")} ${"col l-2 m-2 c-2"}`}>
            <i className="fa-light fa-user-tie"></i>
          </div>
        </div>

        {/* ========================Content SideBar=================================== */}

        <a href="#HEADER">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-regular fa-house"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              Home
            </div>
          </div>
        </a>

        <a href="#ABOUT">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-regular fa-user-pen"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              About
            </div>
          </div>
        </a>

        <a href="#SKILL">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-regular fa-laptop-code"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              Skills
            </div>
          </div>
        </a>

        <a href="#EXP">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-regular fa-bars-progress"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              Experiences
            </div>
          </div>
        </a>

        <a href="#EDU">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-light fa-user-graduate"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              Education
            </div>
          </div>
        </a>

        <a href="https://mycv-server.onrender.com/">
          <div className={`${cx("SideBar__Content")} ${"row"}`}>
            <div className={`${cx("SideBar__Content--Icon")} ${"col l-3 m-3 c-3"}`}>
              <i className="fa-duotone fa-browser"></i>
            </div>
            <div className={`${cx("SideBar__Content--Name")} ${"col l-6 m-6 c-6"}`}>
              DashBoard
            </div>
          </div>
        </a>

      </div>

    </div>
  )
}

export default SideBar