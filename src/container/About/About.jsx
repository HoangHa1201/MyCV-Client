import React, { useState, useEffect } from 'react'

import { getAllDataAbout } from "../../data/ApiAbout";

import styles from './About.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const About = () => {

  //============= Handle data About from API =============
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
    <div className={`${cx("About")} ${"row"}`} id="ABOUT">
      <div className={`${cx("About__Title")} ${"row"}`}>
        <h1 className={`${cx("About__Title--Text")} ${"col l-12 m-12 c-12"}`}>Giới Thiệu</h1>
      </div>
      <div className={`${cx("About__Content")} ${"row"}`}>

        <div className={`${cx("About__Content--Img")} ${"col l-3 m-5 c-10"}`}>
          <div className={`${cx("About__Content--Img-Box")} ${""}`}>
            <img src={dataAbout.linkImg} alt="avatar" />
          </div>
        </div>



        <div className={`${cx("About__Content--Primary")} ${"col l-4 m-5 c-10"}`}>

          <div className={`${cx("About__Content--Text")} ${"row"}`}>
            <h1>Về bản thân</h1>
            {
              dataAbout.content !== undefined ? dataAbout.content.split('.').map((item, index) => {
                return item !== "" ? <p key={index}>{item}.</p> : null
              }) : null
            }
          </div>
          <a href={dataAbout.linkCV} target="_blank" rel="noreferrer" >
            <div className={`${cx("About__Content--CV")} ${"row"}`}>
              <div className="col l-4 m-4 c-4">
                <i className="fa-regular fa-download"></i>
              </div>
              <p className="col l-8 m-8 c-8">Down Load My CV</p>
            </div>
          </a>
        </div>

        <div className={`${cx("About__Content--Psuedo")} ${"col l-0 m-5 c-0"}`}>

        </div>

        <div className={`${cx("About__Content--Infor")} ${"col l-4 m-5 c-10"}`}>
          <div className={`${cx("About__Content--Box")} ${""}`}>
            <h1>Liên hệ tôi</h1>
            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-regular fa-location-dot"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10"}`}>
                <p>{dataAbout.address}</p>
              </div>
            </div>

            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-regular fa-mobile"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10"}`}>
                <p>{dataAbout.phone}</p>
              </div>
            </div>

            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-brands fa-square-facebook"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10"}`}>
                <a className={`${cx("About__Content--Element-Link")} ${""}`} href={dataAbout.faceBook}>{dataAbout.faceBook}</a>
              </div>
            </div>

            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10"}`}>
                <a className={`${cx("About__Content--Element-Link")} ${""}`} href={dataAbout.linkedin}>Nguyen Hoang Ha</a>
              </div>
            </div>

            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10"}`}>
                <a href="mailto:HaNH.B20CN213@stu.ptit.edu.vn" className={`${cx("About__Content--Element-Link")} ${""}`}>{dataAbout.email}</a>
              </div>
            </div>

            <div className={`${cx("About__Content--Element")} ${"row"}`}>
              <div className={`${cx("About__Content--Element-Icon")} ${"col l-2 m-2 c-2"}`}>
                <i className="fa-regular fa-globe"></i>
              </div>
              <div className={`${cx("About__Content--Element-Text")} ${"col l-10 m-10 c-10 "}`}>
                <a className={`${cx("About__Content--Element-Link")} ${""}`} href={dataAbout.website}>hoangha-mycv.netlify.app</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About