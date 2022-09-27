import React, { useState } from "react";

const About = () => {
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
    about_me: [
      {
        id: "first-p-about",
        content:
          "Been in IT industry for more than 20 years now, I've done lot of web development, content management system, mobile app, etc...",
      },
      {
        id: "second-p-about",
        content: `I have taken on different roles, done different tasks and used all different types of programming languages. I am always keeping myself up to date with technologies. That’s very important to keep me going in this fast pace of IT industry.`,
      },
      {
        id: "third-p-about",
        content: `Specialties: ReactJS, VueJs, Angular, NodeJS, GraphQL, HTML, JavaScript, CSS
          Photoshop, Paint.net, Automation test - Selenium, Microsoft UI Coded test, Behaviour driven development - SpecFlow`,
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
                    {state.about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
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
