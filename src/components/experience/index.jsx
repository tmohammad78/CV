import React from "react"
import { exp } from "./experience.js"
import "./styel.scss"

const Experience = () => {
  return (
    <div className="section">
      <div className="section__title">
        <span>Experience</span>
      </div>
      <div className="section__box">
        {exp.map((item, i) => {
          return (
            <div className="box">
              <ul className="exp__box" key={i}>
                <h4>{item.position}</h4>
                <h6><a href={item?.url}>{item.name}</a></h6>
                <span className="date">{item.date}</span>
                {item.description ? (
                  <div className="exp__description">
                    {
                      item.description.map((des, i) => {
                        return <li key={i}>{des}</li>
                      })
                    }
                  </div>

                ) : null}
              </ul>
            </div>

          )
        })}
      </div>
    </div>
  )
}
export default Experience