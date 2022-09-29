import { useEffect, useRef, useCallback } from "react";
import $ from "jquery";
import "../libs/easing.js";

const BackToTop = () => {
  const backToTopElement = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        backToTopElement.current.classList.remove("fadeOut");
        backToTopElement.current.style.display = "block";
        backToTopElement.current.classList.add("fadeIn");
      } else {
        backToTopElement.current.classList.remove("fadeIn");
        backToTopElement.current.classList.add("fadeOut");
      }
    });
  }, []);

  const onClickHandler = useCallback(() => {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  }, []);

  return (
    <button
      onClick={onClickHandler}
      className="back-to-top animated"
      ref={backToTopElement}
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
