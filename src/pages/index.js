import React from "react"
import "./style.scss"
import Skills from "../components/skills"
import About from "../components/about"
import Experience from "../components/experience"
import Project from "../components/project"
import Education from "../components/education"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="main">
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
    </div>
  </Layout>
)

export default IndexPage
