import { request } from 'graphql-request';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import Lottie from 'react-lottie-player';
import lottieJson from '../../assets/porfolio.json';
import { useUserProfile } from '../../App';
import './portfolio.scss';

const Portfolio = () => {
  const {
    portfolioSummary: { html },
  } = useUserProfile();

  const [state, setState] = useState({
    portfolio: [],
  });

  useEffect(() => {
    const fetchPorfolios = async () => {
      const { portfolios } = await request(
        'https://api-ap-southeast-2.hygraph.com/v2/cl8kxng6b27zd01ue4gv0hdz8/master',
        `
          {
            portfolios {
              title
              subTitle
              technologies
              displayOrder
              image {
                url
              }
            }
          }
        `,
      );

      setState((previousState) => {
        return {
          ...previousState,
          portfolio: _.orderBy(portfolios, ['displayOrder'], ['desc']),
        };
      });
    };

    fetchPorfolios();
  }, []);

  return (
    <section id='work' className='portfolio-mf sect-pt4 route'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='title-box text-center'>
              <h3 className='title-a'>
                {' '}
                <span>Portfolio</span>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 'auto', float: 'right', height: 200 }}
                />
              </h3>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <div className='line-mf'></div>
            </div>
          </div>
        </div>

        {state.portfolio.map((item) => {
          return (
            <div className='card' key={item.title}>
              <div className='title-container'>
                <h2>{item.title}</h2>
                <div className='work-img'>
                  <img src={item.image[0].url} alt='' />
                </div>
              </div>
              <div className='card-details'>
                <h2>{item.title}</h2>
                <h3>{item.subTitle}</h3>
                <p>{item.technologies}</p>
                <p>
                  <a href={item.image[0].url} data-lightbox='gallery-vmarine'>
                    Read more
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='title-box text-center'>
              <h3 className='title-a'>
                {' '}
                <span>Portfolio</span>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 'auto', float: 'right', height: 200 }}
                />
              </h3>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <div className='line-mf'></div>
            </div>
          </div>
        </div>
        <div className='row'>
          {state.portfolio.map((item) => {
            return (
              <div className='col-md-4' key={item.title}>
                <div className='work-box'>
                  <a href={item.image[0].url} data-lightbox='gallery-vmarine'>
                    <div className='work-img'>
                      <img
                        src={item.image[0].url}
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                    <div className='work-content'>
                      <div className='row'>
                        <div className='col-sm-8'>
                          <h2 className='w-title'>{item.title}</h2>
                          <h4 className='w-sub-title'>{item.subTitle}</h4>
                          <div className='w-more'>
                            <span className='w-ctegory'>
                              {item.technologies}
                            </span>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='w-like'>
                            <span className='ion-ios-plus-outline'></span>
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
      </div> */}
    </section>
  );
};

export default Portfolio;
