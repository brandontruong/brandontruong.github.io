import Typed from "react-typed";
import { useUserProfile } from "../App";
import "./stars.scss";

const Intro = () => {
  const {
    firstName,
    lastName,
    features,
    cv: { url },
  } = useUserProfile() as any;
  return (
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">
              Hello, My name is {`${firstName} ${lastName}`}
            </h1>

            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={features}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3 intro-content-buttons">
              <div>
                <a
                  className="btn btn-primary btn js-scroll px-4 m-2"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4 m-2"
                  target="_blank"
                  role="button"
                  href={url}
                  download="BrandonTruongCV"
                  rel="noreferrer"
                >
                  Download my CV
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
