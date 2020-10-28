import React from "react";
import "./App.css";
import portrait from "./portrait.png";
import dribbbleIcon from "./dribbble.svg";
import linkedinIcon from "./linkedin.svg";
import previewImage from "./preview.jpg";

function App() {
  return (
    <>
      <nav className="navbar d-flex flex-column align-items-center justify-content-center">
        <span className="logo-name">Eduard Lotz</span>
        <span className="logo-sub">front-end {"&"} ui / ux design</span>
        {/* <span className="h-divider"></span> */}
      </nav>

      {/* <span className="v-divider-left"></span> */}
      {/* <span className="v-divider-right"></span> */}

      <div className="main-bg">
        <div className="d-flex flex-column">
          <div className="d-flex flex-md-row flex-column align-items-start justify-content-center section-header">
            <div className="d-flex flex-column align-self-start h-100 header-text">
              <div className="d-flex flex-column align-items-start justify-content-center">
                <h1 className="main-header anim-slide-up">Hey </h1>
                <h1 className="main-header anim-slide-up delay-2">I'm Eddie!</h1>
              </div>
              <div className="d-flex flex-column align-items-start justify-content-center subheader">
                <p className="anim-slide-up delay-4">
                  Software Developer Apprentice{" "}
                  <a
                    href="https://www.cornerstoneondemand.com/"
                    target="_blank"
                  >
                    @Cornerstone
                  </a>{" "}
                  (formerly Lumesse)
                </p>
                <p className="anim-slide-up delay-5">
                  Freelance UI / UX Designer{" "}
                  <a href="https://www.whitespace.cc/" target="_blank">
                    @whitespace_
                  </a>
                </p>
                <p className="anim-slide-up delay-6">Unfortunately still working on this website</p>

                <div className="d-flex align-items-end social-links anim-slide-up delay-6">
                  <a className="mr-3" href="https://www.linkedin.com/in/eduardlotz/" target="_blank"><img src={linkedinIcon}/></a>
                  <a  href="https://dribbble.com/eduardlotz " target="_blank"><img src={dribbbleIcon}/></a>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-self-end h-100 align-items-end justify-content-end header-image">
              <img
                src={portrait}
                className="portrait-image align-self-end justify-self-end anim-slide-up delay-2"
              />

              {/**           
              <img
                className="align-self-end"
                src={websiteBuildingImage}
                alt="screenshot personal page"
              />
              <img
                className="align-self-start"
                src={webdesignBuildingImage}
                alt="screenshot personal page"
              />
              
            **/}
            </div>
          </div>
        {/* <span className="h-divider m-0"></span> */}
        </div>

        {/** 
        <section className="d-flex flex-column">
          <h2>Skills</h2>
          <div className="d-flex skills-row">
            <div className="col">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <div className="d-flex">
                  <img src={reactIcon} />
                  <img src={reduxIcon} />
                </div>
                <span>React & Redux</span>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <img src={sassIcon} className="align-self-start" />
                <span>SCSS</span>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <img src={figmaIcon} className="align-self-start" />
                <span>Figma</span>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <img src={sketchIcon} className="align-self-start" />
                <span>Sketch</span>
              </div>
            </div>
          </div>
 
          <div className="d-flex skills-row low">
            <div className="col-3">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <span>C#</span>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <span>SQL</span>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-column align-self-start justify-content-start">
                <span>Java</span>
              </div>
            </div>
          </div>
        </section>
*/}

      <section className="d-flex flex-column">
      <h2 className="align-self-start anim-slide-up delay-10">What i'm currently working on</h2>
      <a className="anim-slide-up delay-16" href="https://dribbble.com/shots/14379534-Personal-Site-Portfolio" target="_blank"><img src={previewImage} className="w-100 mt-2 stroke-image"/></a>
      </section>
      </div>
    </>
  );
}

export default App;
