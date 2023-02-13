import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';

import SideBar from "../../components/Sidebar/SideBar";
import { getAllDataImg } from "../../data/ApiImg";
import { getAllDataHeader } from "../../data/ApiHeader";

import styles from "./header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


const Header = () => {

  //============= Handle data Img from API =============
  const [dataImg, setDataImg] = useState([]);

  function getDataImg() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataImg());
    });
  }
  useEffect(() => {
    getDataImg()
      .then((data) => {
        setDataImg(data)

      })
  }, []);
  // ==================Animation Scroll=================
  const [scrollY, setScrollY] = useState('');
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollY(window.scrollY);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    ScrollReveal().reveal('.header', {
      origin: 'bottom',
      duration: 500,
      delay: 0.5,
      distance: '20px',
      easing: 'ease-out'
    });
  }, []);
  // ==================Animation Hover Img================

  // const [hover, setHover] = useState('');

  // useEffect(() => {
  //   const hoverImg = document.querySelectorAll(".headerContent__text--img");
  //   hoverImg.forEach((item) => {
  //     item.addEventListener("mouseover", () => {
  //       setHover('block');
  //     });
  //     item.addEventListener("mouseout", () => {
  //       setHover('');
  //     });
  //   });
  // }, [hover]);
  // console.log(hover);
  // =================Handle Data Header===================
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

  // ==================Handle Data SideBar=================
  const [menu, setMenu] = useState(false);

  const menuMount = useCallback(() => {
    setMenu(true);
  })
  const menuUnmount = useCallback(() => {
    setMenu(false);
  })

  // =================Render Data handled========================
  return (
    <div className={`${cx("header")} ${"row"}`} id='HEADER'>
      <div className={`${cx("headerContent")} ${" col l-12 m-12 c-12"}`}>

        {/* =======Background Image data============== */}
        <div className={`${cx("headerContent__img")} ${"col l-12 m-12 c-12"}`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {
            dataImg.map((item, index) => {
              if (item.title === "BackgroundImg") {
                return <img src={item.linkImg} alt={item.title} key={index} />
              }
            })
          }
        </div>


        {/* ===============Text Data================== */}
        <div className={`${cx("headerContent__text")} ${" col l-10 m-10 c-12 l-o-1 m-o-1 "}`}>
          <div className={`${cx("headerContent__text--first")} ${"row"}`}>
            "{dataHeader.title}", I'm {dataHeader.name}
          </div>
          <div className={`${cx("headerContent__text--second")} ${"row"}`}>
            <h1 className={`${cx("headerContent__text--major")} ${" col l-8 m-10 c-10 l-o-2 m-o-1 c-o-1"}`}>{dataHeader.description}</h1>
          </div>
          <div className={`${cx("headerContent__text--third")} ${"row"}`}>
            {
              // ========Technology Img=============== 
              dataImg.map((item, index) => {
                if (item.title !== "BackgroundImg") {
                  return (
                    <div className={`${cx("headerContent__text--img")} ${"col l-1 m-1"}`} key={index}

                    >
                      <img src={item.linkImg} alt={item.title} />
                      <p className={`${cx("headerContent__text--word")} ${""}`}>{item.title}</p>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className={`${cx("sideBar")} ${""}`}>
          <div className={`${cx("SideBar__Icon")} ${""}`}  onClick={menuMount}>
            {!menu && <i className="fas fa-bars"></i>}
          </div>
          <div className={`${cx("SideBar__Menu")} ${""}`} onClick={menuUnmount}>
            {menu && <SideBar />}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header