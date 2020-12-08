import React from "react";
import "./components/SkillBlock";

import "./App.css";

import portrait from "./assets/portrait.png";
import dribbbleIcon from "./assets/dribbble.svg";
import linkedinIcon from "./assets/linkedin.svg";
import previewImage from "./assets/mindr-reveal-shot.jpg";
import reactIcon from "./assets/reactlogo.svg";
import reduxIcon from "./assets/reduxlogo.svg";
import figmaIcon from "./assets/figmaicon.svg";
import sketchIcon from "./assets/sketchicon.svg";
import sassIcon from "./assets/sassicon.svg";
import SkillBlock from "./components/SkillBlock";

const imageLink = "https://dribbble.com/shots/14723798-mindr-online-party-game-components";

function App() {
  return (
    <>
      {/* <nav className="navbar d-flex flex-column align-items-center justify-content-center">
        <span className="logo-name">Eduard Lotz</span>
        <span className="logo-sub">front-end {"&"} ui / ux design</span>
      </nav> */}

      <div className="main-bg">
          <div className="d-flex flex-md-row flex-column align-self-start justify-content-between section-header subheader">
              <div className="d-flex flex-column align-items-start justify-content-center subheader">
                <h1 className="main-header anim-slide-up">Hey 👋</h1>
                <h1 className="main-header anim-slide-up delay-2">
                  I'm Eddie!
                </h1>
                <p className="anim-slide-up delay-3">
                  Software Developer Apprentice{" "}
                  <a
                    href="https://www.cornerstoneondemand.com/"
                    target="_blank"
                  >
                    @Cornerstone
                  </a>{" "}
                  (formerly Lumesse)
                </p>
                <p className="anim-slide-up delay-4">
                  Freelance UI / UX Designer{" "}
                  <a href="https://www.whitespace.cc/" target="_blank">
                    @whitespace_
                  </a>
                </p>

                <div className="d-flex align-items-end social-links anim-slide-up delay-6">
                  <a
                    className="mr-3"
                    href="https://www.linkedin.com/in/eduardlotz/"
                    target="_blank"
                  >
                    <img src={linkedinIcon} />
                  </a>
                  <a href="https://dribbble.com/eduardlotz " target="_blank">
                    <img src={dribbbleIcon} />
                  </a>
                </div>
            </div>
              <img
                src={portrait}
                className="portrait-image align-self-end justify-self-end anim-slide-up delay-5"
              />
        </div>

        {/* <section className="d-flex flex-column">
          <h2>What i like to work with</h2>
          <div className="d-flex justify-content-between skills-row">
              <SkillBlock icons={[reactIcon, reduxIcon]} name="React & Redux" />
              <SkillBlock icon={sassIcon} name="SCSS" />
              <SkillBlock icon={figmaIcon} name="Figma" />
              <SkillBlock icon={sketchIcon} name="Sketch" />
          </div>

          <div className="d-flex justify-content-between align-items-start skills-row low">
              <SkillBlock name="C#" />
              <SkillBlock name="SQL" />
              <SkillBlock name="Java" />
          </div>
        </section> */}

<section className="d-flex flex-column preview-section">
      <h2 className="align-self-start anim-slide-up delay-10">What i'm currently working on</h2>
      <a className="anim-slide-up delay-16 w-100" href={imageLink} target="_blank"><img src={previewImage} className="w-100 mt-2 preview-image soft-shadow"/></a>
      </section>
      </div>
    </>
  );
}

export default App;
