import React, { useState } from "react";
import { useUserProfile } from "../App";

const About = () => {
  const {
    aboutMe: { html },
  } = useUserProfile();

  const [state, setState] = useState({
    skills: [
      {
        id: "ReactJS_skill",
        content: "ReactJS",
        percentage: "90%",
        value: "90",
      },
      {
        id: "VueJS_skill",
        content: "VueJS",
        percentage: "80%",
        value: "80",
      },
      {
        id: "AngularJS_skill",
        content: "AngularJS",
        percentage: "40%",
        value: "40",
      },
      { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
      { id: "CSS3_skill", content: "CSS3", percentage: "75%", value: "75" },
      {
        id: "JavaScript_skill",
        content: "JavaScript",
        percentage: "90%",
        value: "90",
      },
      {
        id: "VanillaJS_skill",
        content: "VanillaJS",
        percentage: "85%",
        value: "85",
      },
    ],
  });

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {state.skills.map((skill) => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">{skill.percentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.percentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
