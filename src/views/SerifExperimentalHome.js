import React from 'react'

export default function SerifExperimentalHome() {
    return (
        <div className="main-container">
      <div className="name-hero-container">
        <div class="name-container">
          <h1 className="front-header">Eduard Lotz</h1>
          <h1 className="front-header --outlined">Eduard Lotz</h1>
        </div>
        <div className="positions-container">
          <h2 className="header-subtext">
            Frontend developer{" "}
            <a href="https://www.active-value.de/" target="_blank">
              @active-value
            </a>
          </h2>
          <h2 className="header-subtext">
            ui designer{" "}
            <a href="https://www.whitespace.cc/en/" target="_blank">
              @whitespace_
            </a>
          </h2>
        </div>
      </div>

      <div className="nav-links">
        <div className="top-bar">
          <div className="landing-link-container" cursor-class="arrow">
            <a href="#">About me</a>
          </div>
          <div className="landing-link-container" cursor-class="arrow">
            <a href="#">Contact me</a>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="landing-link-container" cursor-class="arrow">
            <a href="#">Development</a>
          </div>
          <div className="landing-link-container" cursor-class="arrow">
            <a href="#">UI Design</a>
          </div>
        </div>
      </div>
    </div>
    )
}
