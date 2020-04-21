import React from "react"
import Frontend from "../../../static/frontend.png"
import "./style.scss"

const Header = () => {
  return (
    <div
      className={`header`}
      style={{
        backgroundImage: `url(${Frontend})`
      }}
    >
      Header
    </div>
  )
}
export default Header
