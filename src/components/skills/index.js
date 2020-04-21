import React from "react"

const Skills = () => {
  return (
    <div className="skills-box">
      <div className="title-box">
        <div className="detail-box__title">
          <h2>Skills</h2>
        </div>
      </div>
      <div className="detail-box clearfix">
        <div className="detail-box__paragraph">
          <div className="col-1">
            <h3>Javascript </h3>
            <h3>Typescript </h3>
            <h3>React js </h3>
            <h3>Gatsby</h3>
            <h3>Redux </h3>
            <h3>Redux Saga </h3>
          </div>
          <div className="col-1">
            <h3>Webpack</h3>
            <h3>Babel</h3>
            <h3>Sass</h3>
            <h3>Styled-Component</h3>
            <h3>Git</h3>
            <h3>Jest in TDD</h3>
          </div>
          <div className="col-1">
            <h3>PWA</h3>
            <h3>Server Side Rendering </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
