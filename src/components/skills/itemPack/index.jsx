import React from "react"
import "./style.scss"

const ItemPack = ({ skill }) => {
  return (
    <div className="child__item">
      {skill.parts.map((item) => {
        return (
          <div className="child__item--inner">
            <h5 key={item.id}>{item.name}</h5>
          </div>
        )
      })}
    </div>

  )
}
export default ItemPack