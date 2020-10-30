import React from "react"
import { skills } from "./skills"
import Item from "./item/item"
import "./style.scss"

const Skills = () => {
  return (
    <div className="section">
      <div className="section__title">
        <span>Skills</span>
      </div>

      <div className="section__box">
        <div className="section__box--item" >
        {
          skills.map((item) => {
            return <Item key={item.id} item={item} />
          })
        }
        </div>
      </div>
    </div>
  )
}
export default Skills