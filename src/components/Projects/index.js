import React from "react"

const Project = () => {
  return (
    <div className="project-box">
      <div className="title-box"></div>
      <div className="detail-box clearfix">
        <div className="detail-box__title">
          <h2>Project</h2>
        </div>
        <div className="detail-box__paragraph clearfix">
          <ul className="my-list">
            <h2>
              <a href="https://github.com/tmohammad78/react-app">
                React App Food Delivery
              </a>
            </h2>

            <span className="DateWork">Nov 2019 – Present</span>
            <li>Design and develop a React App</li>
            <li>Refactor to the Typescript</li>
            <li>
              Using Redux for state management and Immutable Update Patterns for
              prevent extra rendering foodlist when one item added to cart
            </li>
            <li>Implement CSS responsive design and using Sass</li>
            <li>Using Styled-component for create Template and dark mode</li>
            <li>Tools: Hooks , webpack , FireBase , Babel , git</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Project
