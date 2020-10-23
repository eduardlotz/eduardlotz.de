import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import websiteBuildingImage from "./websiteBuild.svg";
import webdesignBuildingImage from "./webdesignBuild.svg";
import reactIcon from "./reactlogo.svg";
import reduxIcon from "./reduxlogo.svg";
import figmaIcon from "./figmaicon.svg";
import sassIcon from "./sassicon.svg";
import sketchIcon from "./sketchicon.svg";
import portrait from "./portrait.png";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <>
      <nav className="navbar d-flex flex-column align-items-center justify-content-center">
        <span className="logo-name">Eduard Lotz</span>
        <span className="logo-sub">front-end {"&"} ui / ux design</span>
        <span className="h-divider"></span>
      </nav>

      <span className="v-divider-left"></span>
      <span className="v-divider-right"></span>

      <div className="main-bg">
        <div className="d-flex flex-column">
          <div className="d-flex flex-md-row flex-column align-items-start justify-content-center section-header">
            <div className="d-flex flex-column align-self-start h-100 w-50">
              <div className="d-flex flex-column align-items-start justify-content-center">
                <h1 className="main-header">Hey </h1>
                <h1 className="main-header">I'm Eddie!</h1>
              </div>
              <div className="d-flex flex-column align-items-start justify-content-center subheader">
                <p>
                  Software Developer Apprentice{" "}
                  <a
                    href="https://www.cornerstoneondemand.com/"
                    target="_blank"
                  >
                    @Cornerstone
                  </a>{" "}
                  (formerly Lumesse)
                </p>
                <p>
                  Freelance UI / UX Designer{" "}
                  <a href="https://www.whitespace.cc/" target="_blank">
                    @whitespace_
                  </a>
                </p>
                <p>Unfortunately still working on this website</p>
              </div>
            </div>
            <div className="d-flex flex-column align-self-start h-100 w-50">
              <img
                src={portrait}
                width={337}
                height={328}
                className="align-self-end justify-self-end"
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
        <span className="h-divider m-0"></span>
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
      </div>
    </>
  );
}

export default App;
