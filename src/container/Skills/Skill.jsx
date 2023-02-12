import React, { useState, useEffect } from 'react'

import { getAllDataSkill } from '../../data/ApiSkill';

import styles from './Skill.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Skill = () => {
  // =======================Handle API Skill=======================
  const [dataSkill, setDataSkill] = useState([])
  function getDataSkill() {
    return new Promise((resolve, reject) => {
      resolve(getAllDataSkill());
    });
  }
  useEffect(() => {
    getDataSkill()
      .then((data) => {
        setDataSkill(data)
      })
  }, [])

  return (
    <div className={`${cx("Skill")} ${"row"}`} id="SKILL">
      <div className={`${cx("Skill__Title")} ${"row"}`}>
        <h1 className={`${cx("Skill__Title--Text")} ${"col l-12 m-12 c-12"}`}>Kĩ Năng</h1>
      </div>
      <div className={`${cx("Skill__Content")} ${"row"}`}>
        <div className={`${cx("Skill__Content--Box")} ${"col l-10 m-10 c-11"}`}>
          <div className="row">
            {dataSkill.map((item, index) => {
              return (
                <div className={`${cx("Skill__Content--Item")} ${"col l-4 m-6 c-12"}`} key={index}>
                  <div className={`${cx("Skill__Content--Item--Box")} ${""}`}>
                    <div className={`${cx("Skill__Content--Item--Title")} ${"row"}`}>
                      <h1>{item.title}</h1>
                    </div>
                    <div className={`${cx("Skill__Content--Item--Desc")} ${"row"}`}>
                      <div className="col l-12 m-12 c-12">
                        {item.description.map((element, index) => {
                          return (
                            <div className={`${cx("Skill__Content--Item--Desc--Text")} ${"row"}`} key={index}>
                              <p className='col l-11 m-11 c-11'>{element}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill