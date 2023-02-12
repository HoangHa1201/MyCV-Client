import React, { useState, useEffect } from 'react'

import { getAllDataExp } from '../../data/ApiExperience';

import styles from './Experience.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Experience = () => {
  // =======================Handle API EXP=======================
  const [dataExp, setDataExp] = useState([])
  function getDataExp() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataExp());
    });
  }
  useEffect(() => {
    getDataExp()
      .then((data) => {
        setDataExp(data)
      })
  }, [])

  return (
    <div className={`${cx("Exp")} ${"row"}`} id="EXP">
      <div className={`${cx("Exp__Title")} ${"row"}`}>
        <h1 className={`${cx("Exp__Title--Text")} ${"col l-12 m-12 c-12"}`}>Kinh Nghiệm</h1>
      </div>
      <div className={`${cx("Exp__Content")} ${"row"}`}>
        <div className={`${cx("Exp__Content--Box")} ${"col l-10 m-10 c-11"}`}>
          {dataExp.map((item, index) => {
            return (
              <div className={`${cx("Exp__Content--Item")} ${"row"}`} key={index}>
                <div className={`${cx("Exp__Content--Item--Header")} ${"col l-4 m-4 c-11"}`}>
                  <div className={`${cx("Exp__Content--Item--Element")} ${"row"}`}>
                    <h3>Dự Án:</h3>{item.projectName}
                  </div>
                  <div className={`${cx("Exp__Content--Item--Element")} ${"row"}`}>
                    <h3>Bắt Đầu:</h3>{item.start}
                  </div>
                  <div className={`${cx("Exp__Content--Item--Element")} ${"row"}`}>
                    <h3>Kết Thúc:</h3>{item.end}
                  </div>
                  <div className={`${cx("Exp__Content--Item--Element")} ${"row"}`}>
                    <h3>Vị trí:</h3>{item.major}
                  </div>
                  <div className={`${cx("Exp__Content--Item--Element")} ${"row"}`}>
                    <h3>{item.company}</h3>
                  </div>
                </div>
                <div className={`${cx("Exp__Content--Item--Demo")} ${"col l-7 m-7 c-11"}`}>
                  <div className={`${cx("Exp__Content--Item--Demo-Link")} ${"row"}`}>
                    {
                      item.projectDemo.endsWith(".mp4") ? <video src={item.projectDemo} controls autoPlay></video> : <img src={item.projectDemo} alt="image" />
                    }
                  </div>
                </div>
                <div className={`${cx("Exp__Content--Item--Desc")} ${"col l-11 m-11 c-11"}`}>
                  <div className={`${cx("Exp__Content--Item--Text")} ${"row"}`}>
                    {
                      item.content.split('.').map((item, index) => {
                        return (
                          <span key={index}>{
                            item.indexOf(":") === -1 ? item : <p><b>{item.substring(0, item.indexOf(":"))}</b>{item.substring(item.indexOf(":"))}.</p>
                          }</span>
                        )
                      })
                    }
                  </div>
                  <div className={`${cx("Exp__Content--Item--Product")} ${"row"}`}>
                    {
                      item.product === "Chưa được triển khai trên môi trường sản phẩm"
                        ? <div className={`${cx("Exp__Content--Item--Product-False")} ${""}`}>
                          Chưa được triển khai
                          <i className="fa-regular fa-cloud-xmark"></i>
                        </div>
                        : <div className={`${cx("Exp__Content--Item--Product-True")} ${""}`}>
                          <a href={item.product}>Xem chi tiết sản phẩm</a>
                          <i className="fa-regular fa-cloud-arrow-up"></i>
                        </div>
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience