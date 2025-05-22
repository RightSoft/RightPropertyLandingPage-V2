import GSAP from './lib/gsap'
import ReactLenis from 'lenis/react';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import './styles/index.scss'
import './styles/index.css'

import HomePage from './view/pages/home-page';
import Header from './view/components/header';
import ReactGA from "react-ga4";
import { useEffect, useState } from 'react';
import PrivacyPolicy from './view/pages/privacy-policy';
import FooterSection from './view/components/footer/section';

function App() {
  ReactGA.initialize("G-D169WBQW9L");

  const [pathname, setPathname] = useState<string>();
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const page = pathname === "/privacy-policy" ? <PrivacyPolicy /> : <HomePage />;

  return (

    <ReactLenis
      options={{
        lerp: 0.08,
      }}
      root
    >
      <GSAP />
      <Header />
      <div className='mt-[6.25rem] lg:mt-[5rem] overflow-x-hidden'>
        {page}
        <FooterSection />
      </div>
    </ReactLenis>
  )
}

export default App
