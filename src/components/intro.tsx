import { useCallback } from 'react';
import ReactGA from 'react-ga';
import { ReactTyped } from 'react-typed';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/home.json';
import { useUserProfile } from '../App';
import './stars.scss';

const Intro = () => {
  const {
    firstName,
    lastName,
    features,
    cv: { url },
  } = useUserProfile() as any;

  const handleOnCVDownload = useCallback(() => {
    ReactGA.event({
      category: 'Intro',
      action: 'Click',
      label: 'Download CV',
    });
  }, []);

  return (
    <div id='home' className='intro route bg-image background'>
      <div id='stars' />
      <div id='stars2' />
      <div id='stars3' />

      <div className='intro-content display-table'>
        <div className='table-cell'>
          <div className='container'>
            <h1 className='intro-title mb-4'>
              Hello, My name is {`${firstName} ${lastName}`}
            </h1>

            <p className='intro-subtitle'>
              <span className='text-slider-items'></span>
              <strong className='text-slider'>
                <ReactTyped
                  strings={features}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className='pt-3 intro-content-buttons'>
              <div>
                <a
                  className='btn btn-primary btn js-scroll px-4 m-2'
                  href='#work'
                  role='button'
                >
                  View My Work
                </a>
                <a
                  className='btn btn-primary btn js-scroll px-4 m-2'
                  target='_blank'
                  role='button'
                  href={url}
                  download='BrandonTruongCV'
                  rel='noreferrer'
                  onClick={handleOnCVDownload}
                >
                  Download my CV
                </a>
              </div>
            </p>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 'auto', height: 250 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
