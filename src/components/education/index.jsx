import React from "react"
import { edu } from "./edu"

const Education = () => {
  return (
    <div className="section">
      <div className="section__title">
        <span>Education</span>
      </div>

      <div className="section__box">
        <div className="box">
          {edu.map((item) => {
            return (
              <div className="exp__box">
                <h4><a href={item.url}>{item.name}</a></h4>
                <h6>{item.major}</h6>
                <span className="date">{item.date}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Education