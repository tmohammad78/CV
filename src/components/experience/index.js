import React from "react"

const Experience = () => {
  return (
    <div className="experience-box">
      <div className="title-box"></div>
      <div className="detail-box clearfix">
        <div className="detail-box__title">
          <h2>Experience</h2>
        </div>
        <div className="detail-box__paragraph clearfix">
          <ul className="my-list">
            <h2>Delino</h2>
            <span className="DateWork">Feb 2019 - Aug 2019</span>
            <li>
              I worked with react for implement a core for making delivery food
            </li>
            <li>Create Store in App with Redux</li>
          </ul>
          <ul className="my-list">
            <h2>BestMeet</h2>
            <span className="DateWork">Jul 2018 - Sep 2018</span>
            <li>
              I was intern of frontend in that Start-up 
            </li>
            <li>I started frontend from there and I learned Bootstrap 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Experience
