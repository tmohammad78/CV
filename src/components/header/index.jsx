import React from "react"
import Linkedin from "../../../assets/linkedin.svg"
import Twitter from "../../../assets/twitter.svg"
import Telegram from "../../../assets/telegram.svg"
import Github from "../../../assets/github.svg"
import Medium from "../../../assets/medium.svg"

import "./style.scss"

const Header = () => {
  return (
    <div className="header__profile">
      <div className="image"></div>
      <div className="header__info">
        <span className="name">Mohammad Taheri</span>
        <ul className="header__pro">
          <li>mohammadtaheri506@gmail.com</li>
          <li>+989375050156</li>
          <li className="icons">
            <div>
              <a href="https://www.linkedin.com/in/tmohammad78/">
                <Linkedin />
              </a>
            </div>
            <div>
              <a href="https://mohammadtaheri.medium.com/">
                <Medium />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/tmohammad78">
                <Twitter />
              </a>
            </div>
            <div>
              <a href="https://github.com/tmohammad78">
                <Github />
              </a>
            </div>
            <div>
              <a href="https://t.me/Tmohammad_taheri">
                <Telegram />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
