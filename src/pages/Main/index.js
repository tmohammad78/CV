import React from "react"
import About from "../../components/aboutMe"
import Experience from "../../components/experience"
import Skills from "../../components/skills"
import Projects from "../../components/Projects/index"
import Education from "../../components/Education/index"
import MyImage from "../../../static/mohammadnew.jpg"
import "./style.scss"

const Main = () => {
  return (
    <div className="wrapper">
      <div className="header-in">
        <div>
          <h2>Mohammad Taheri</h2>
          <span>React Developer,javascript developer</span>
        </div>
        <div
          className="profile-photo"
          style={{
            backgroundImage: `url(${MyImage})`,
          }}
        />
        <div className="email-number">
          <h3>mohammadtaheri506@gmail.com</h3>
          <br />
          <span>+989375050156</span>
        </div>
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  )
}
export default Main
