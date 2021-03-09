import React from "react";
import { motion } from "framer-motion";

import "../components/SkillBlock";

import "../stylesheets/dist/cleanhome.css";

import portrait from "../assets/eddie.png";
import dribbbleIcon from "../assets/dribbble.svg";
import spotifyIcon from "../assets/spotify.svg";
import gitHubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import previewImage from "../assets/mindr-preview.jpg";
import personalPageTeaser from "../assets/personal-page-teaser.jpg";

const leftImageLink = "https://mindrapp.de";
const rightImageLink = "https://dribbble.com/shots/15218369-Personal-Page-2021";
function CleanHome() {
  return (
    <div className="main-bg">
      <div className="d-flex flex-md-row flex-column align-self-start justify-content-between section-header subheader">
        <div className="d-flex flex-column align-items-start justify-content-center subheader">
          <h1 className="main-header anim-slide-up">Hey, I'm Eddie.</h1>
          <p className="anim-slide-up delay-3">
            Frontend Developer{" "}
            <a
              href="https://www.active-value.de/"
              target="_blank"
              cursor-class="arrow"
            >
              @active-value
            </a>
          </p>
          <p className="anim-slide-up delay-4">
            Freelance UI Designer{" "}
            <a
              href="https://www.whitespace.cc/"
              target="_blank"
              cursor-class="arrow"
            >
              @whitespace_
            </a>
          </p>

          <div className="d-flex align-items-end social-links anim-slide-up delay-6">
            <a
              className="mr-3"
              href="https://www.linkedin.com/in/eduardlotz/"
              target="_blank"
              cursor-class="overlay"
            >
              <img src={linkedinIcon} />
            </a>
            <a
              className="mr-3"
              href="https://dribbble.com/eduardlotz"
              target="_blank"
              cursor-class="overlay"
            >
              <img src={dribbbleIcon} />
            </a>
            <a
              className="mr-3"
              href="https://open.spotify.com/user/captainlowie?si=Sedo1rrzSrKslLgb0b3HMA"
              target="_blank"
              cursor-class="overlay"
            >
              <img src={spotifyIcon} />
            </a>
            <a
              href="https://github.com/eduardlotz"
              target="_blank"
              cursor-class="overlay"
            >
              <img src={gitHubIcon} />
            </a>
          </div>
        </div>
        <motion.div
          className="portrait-container align-self-end justify-self-end"
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.7}
          whileTap={{
            cursor: "grabbing",
          }}
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 14 }}
          transition={{
            type: "spring",
            default: { duration: 0.6 },
          }}
        >
          <img
            src={portrait}
            className="portrait-image "
          />
        </motion.div>
      </div>

      <section className="d-flex flex-column preview-section">
        <h2 className="align-self-start anim-slide-up delay-10">
          What i'm currently working on
        </h2>
        <div className="anim-slide-up delay-16 w-100 image-container">
          <a href={leftImageLink} target="_blank" cursor-class="open-link">
            <img src={previewImage} className="w-100 mt-2 preview-image hover-zoom" />
          </a>
          <a href={rightImageLink} target="_blank" cursor-class="open-link">
            <img
              src={personalPageTeaser}
              className="w-100 mt-2 preview-image hover-zoom"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
export default CleanHome;
