import React from "react";
import "./stars.scss";
import Typed from "react-typed";

const Intro = () => (
  <div id="home" className="intro route bg-image background">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />

    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="intro-title mb-4">Hello, My name is Brandon Truong</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items"></span> 
            <strong className="text-slider"> 
              <Typed
                strings={[
                  "Front End Developer",
                  "Nodejs Developer",
                  "Software Engineer",
                  "Team Player"
                ]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          <p className="pt-3">
            <a
              className="btn btn-primary btn js-scroll px-4"
              href="#work"
              role="button"
            >
              View My Work
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Intro;
