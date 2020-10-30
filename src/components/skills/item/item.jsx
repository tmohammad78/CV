import React from "react"
import "./style.scss"
import ItemPack from "../itemPack"

const Item = ({ item,key }) => {
  return (
    <div className="item" key={key} >
      <div className="item__header">
        <h3>{item.title}</h3>
      </div>
      {
        item.parts ? (
          <div>
            {item.parts.map((skill) => {
              return (
                <div key={skill.id} className="item__skill">
                  <h4>{skill.name}</h4>
                  {skill.parts ? <ItemPack skill={skill} /> : null}
                </div>
              )
            })}
          </div>
        ) : null
      }
    </div>
  )
}
export default Item