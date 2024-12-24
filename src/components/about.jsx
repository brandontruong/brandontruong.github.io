import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/about-me.json';
import { useUserProfile } from '../App';

const About = () => {
  const {
    aboutMe: { html },
    skillGraph,
  } = useUserProfile();

  return (
    <section id='about' className='about-mf sect-pt4 route'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='box-shadow-full'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='row'>
                    <div
                      className='col-sm-6 col-md-5'
                      style={{ margin: '0 auto' }}
                    >
                      <div
                        className='about-img'
                        style={{ textAlign: 'center' }}
                      >
                        <img className='img-fluid rounded b-shadow-a' alt='' />
                      </div>
                    </div>
                  </div>
                  <div className='skill-mf'>
                    {skillGraph.skills.map((skill) => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{' '}
                          <span className='pull-right'>{skill.percentage}</span>
                          <div className='progress'>
                            <div style={{ width: skill.percentage }}>
                              <span className='progress-bar'></span>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-me pt-4 pt-md-0'>
                    <div className='title-box-2'>
                      <h5 className='title-left'>About Me</h5>
                      <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{
                          width: 'auto',
                          position: 'absolute',
                          height: 150,
                          right: 0,
                          top: -80,
                        }}
                      />
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
