import { useState } from "react";

import siteminder from "../img/siteminder.png";
import westpac from "../img/westpac.png";
import asx from "../img/asx.png";
import sca from "../img/sca.png";
import nab from "../img/nab.png";
import pickles from "../img/pickles.png";

const Portfolio = () => {
  const [state] = useState({
    portfolio: [
      {
        id: "siteminder",
        title: "Siteminder",
        subTitle: "Platform Property",
        technologies: "ReactJS VueJS TailwindCss NodeJS GraphQl",
        img: siteminder,
      },
      {
        id: "asx",
        title: "ASX",
        subTitle: "Chess UI",
        technologies: "SingleSpa ReactJS Web-socket MaterialUI NodeJS GraphQl",
        img: asx,
      },
      {
        id: "southern-cross",
        title: "Southern Cross",
        subTitle: "Radio Station Platform",
        technologies: "ReactJS Redux NextJs FormIO NodeJS Jest Jasmine",
        img: sca,
      },
      {
        id: "westpac",
        title: "Westpac",
        subTitle: "Customer Pricing Platform",
        technologies: "ReactJS Redux Redux-Saga NodeJS Json-server",
        img: westpac,
      },
      {
        id: "nabtrade",
        title: "NAB Trade",
        subTitle: "Share trade portal",
        technologies: "ReactJS React-Native Redux Json-server Jest",
        img: nab,
      },
      {
        id: "pickles",
        title: "Pickles Auction",
        subTitle: "Buyer ID application",
        technologies: "Angular4 Typescript React Redux Webpack Nodejs",
        img: pickles,
      },
    ],
  });

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Senior developer with more than 20 years of experience in cross
                platform web application development and enterprise application
                development.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {state.portfolio.map((item) => {
            return (
              <div className="col-md-4">
                <div className="work-box">
                  <a href={item.img} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img src={item.img} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{item.title}</h2>
                          <h4 className="w-sub-title">{item.subTitle}</h4>
                          <div className="w-more">
                            <span className="w-ctegory">
                              {item.technologies}
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
