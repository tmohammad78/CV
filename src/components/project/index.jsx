import React from "react"
import { projects } from "./project"
import { Link } from "gatsby"

const Project = () => {
  return (
    <div className="section">
      <span className="section__title">Project</span>
      <div className="section__box">
        {projects.map((item) => {
          return (
            <div className="box">
              <ul className="exp__box" key={item.id}>
                <h4><a href={item?.url}>{item.title}</a></h4>
                <span className="date">{item.date}</span>
                {
                  item?.description.map((des, i) => {
                    return <li key={i}>{des}</li>
                  })
                }
              </ul>
            </div>

          )
        })}
      </div>
    </div>
  )
}
export default Project