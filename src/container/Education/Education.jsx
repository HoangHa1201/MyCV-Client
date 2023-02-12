import React, { useState, useEffect } from 'react'

import { getAllDataEdu } from '../../data/ApiEducation'

import styles from './Education.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Education = () => {

  // =======================Handle API EDU=======================
  const [dataEdu, setDataEdu] = useState([])
  function getDataEdu() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataEdu());
    });
  }
  useEffect(() => {
    getDataEdu()
      .then((data) => {
        setDataEdu(data)
      })
  }, [])

  return (
    <div className={`${cx("Edu")} ${""}`} id="EDU">
      <div className={`${cx("Edu__Title")} ${"row"}`}>
        <h1 className={`${cx("Edu__Title--Text")} ${"col l-12 m-12 c-12"}`}>Giáo Dục</h1>
      </div>
      <div className={`${cx("Edu__Content")} ${"row"}`}>
        {
          dataEdu.map((item, index) => {
            return (
              <div className={`${cx("Edu__Content--Item")} ${"col l-10 m-10 c-10 l-o-1 m-o-1 c-o-1 "}`} key={index}>
                <div className={`${cx("Edu__Content--Item__Header")} ${"row"}`}>
                  <div className={`${cx("Edu__Content--Item__Time")} ${"col"}`}>
                    <p>{item.start}</p>-<p>{item.end}</p>
                  </div>
                </div>
                <div className={`${cx("Edu__Content--Item__Body")} ${"row"}`}>
                  <div className={`${cx("Edu__Content--Item__Body--Desc")} ${"col l-12 m-12 c-12"}`}>
                    <div className={`${cx("Edu__Content--Item__Body--Edu")} ${"col l-8 m-10 c-12 l-o-2 m-o-1 "}`}>
                      {item.university}
                    </div>
                    <div className={`${cx("Edu__Content--Item__Body--Major")} ${"col l-8 m-10 c-12 l-o-2 m-o-1 "}`}>
                      {item.major}
                    </div>
                  </div>
                  <div className={`${cx("Edu__Content--Item__Body--Resummer")} ${"col l-8 m-10 c-12 l-o-2 m-o-1"}`}>
                    {
                      item.description.split(".").map((element, index) => {
                        return (
                          <p key={index}>{element}.</p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education