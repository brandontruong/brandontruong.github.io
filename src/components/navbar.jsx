import $ from 'jquery';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { useUserProfile } from '../App';
import lightTheme from '../assets/images/light-mode.png';
import darkTheme from '../assets/images/night-mode.png';

const ImageButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const Navbar = ({ onThemeChange }) => {
  const { pictures: logos } = useUserProfile();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const [state, setState] = useState({
    logo: logos[0],
  });

  useEffect(() => {
    onThemeChange(isDarkTheme);
  }, [isDarkTheme, onThemeChange]);

  useEffect(() => {
    const nav = $('nav');
    let navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function () {
      if (!$('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
      }
    });

    $('body').scrollspy({
      target: '#mainNav',
      offset: navHeight,
    });

    $('.js-scroll')
      .off('click')
      .on('click', function (event) {
        ReactGA.pageview(event.currentTarget.attributes['href'].value);
        $('.navbar-collapse').collapse('hide');
      });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector('.navbar-expand-md')
          .classList.add('navbar-reduce');
        document
          .querySelector('.navbar-expand-md')
          .classList.remove('navbar-trans');
        setState({ logo: logos[1] });
      } else {
        document
          .querySelector('.navbar-expand-md')
          .classList.add('navbar-trans');
        document
          .querySelector('.navbar-expand-md')
          .classList.remove('navbar-reduce');
        setState({ logo: logos[0] });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on('click', function () {
      if (
        window.location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            1000,
            'easeInExpo',
          );
          return false;
        }
      }
    });
  }, [logos]);

  return (
    <nav
      className='navbar navbar-b navbar-trans navbar-expand-md fixed-top'
      id='mainNav'
    >
      <div className='container'>
        <a className='navbar-brand js-scroll' href='#page-top'>
          <img src={state.logo.url} alt='logo' style={{ maxWidth: '100px' }} />
        </a>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#navbarDefault'
          aria-controls='navbarDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className='navbar-collapse collapse justify-content-end'
          id='navbarDefault'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link js-scroll active' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll' href='#work'>
                Work
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll' href='#contact'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <ImageButton onClick={toggleTheme}>
                <img
                  className='theme-icon'
                  src={isDarkTheme ? lightTheme : darkTheme}
                  alt={isDarkTheme ? 'Dark theme' : 'Light theme'}
                />
              </ImageButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
