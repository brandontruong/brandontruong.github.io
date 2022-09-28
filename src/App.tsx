import React, { useState, useEffect } from "react";
import { request } from "graphql-request";
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';
import './App.css';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

// We still have to specify a type, but no default!
export const [useUserProfile, CurrentUserProvider] = createCtx<{}>();

const App = () => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: 'Truong',
    features: [],
    cv: { url: ''}

  });

  useEffect(() => {
    const fetchPorfolios = async () => {
      const { userProfile } = await request(
        "https://api-ap-southeast-2.hygraph.com/v2/cl8kxng6b27zd01ue4gv0hdz8/master",
        `
        {
          userProfile(where: {id: "cl8l9ozfq1tx70c2tvryy2acu"}) {
            firstName
            lastName
            features
            cv {
              fileName
              url
            }
          }
        }
        `
      );

      setUser((previousState) => {
        return { ...previousState, ...userProfile };
      });
    };

    fetchPorfolios();
  }, []);


  return (
    <React.Fragment>
      <CurrentUserProvider value={user}>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop /> 
        <Preloader />
      </CurrentUserProvider>
    </React.Fragment>
  );
}

export default App;
