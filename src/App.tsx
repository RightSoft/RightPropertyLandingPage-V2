import ReactLenis from 'lenis/react';
import './styles/index.css'

import HomePage from './view/pages/home-page';
import { useEffect, useState, Suspense, lazy, useCallback } from 'react';
import ReactGA from 'react-ga4';
import Header from './view/components/header/header.tsx';
import WindowSizeProvider from './view/components/providers/window-size-provider.tsx';


// Lazy load non-critical components and GSAP
const LazyFooter = lazy(() => import('./view/components/footer/section'));
const LazyGSAP = lazy(() => import('./lib/gsap.tsx').then(module => ({ default: module.default })));
const LazyNotFoundPage = lazy(() => import('./view/pages/404'));
const LazyPrivacyPolicy = lazy(() => import('./view/pages/privacy-policy'));

function App() {
  const [pathname, setPathname] = useState<string>();
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [_, setLenisOptions] = useState({ lerp: 0, duration: 0 });
  useEffect(() => {
    ReactGA.initialize('G-D169WBQW9L');
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [])
  useEffect(() => {
    setPathname(window.location.pathname);

    // Defer GSAP loading until after initial render
    const gsapTimer = setTimeout(() => {
      setGsapLoaded(true);
    }, 100);



    // Defer non-critical CSS
    const loadSwiper = () => {
      // Use dynamic imports with proper typing
      Promise.all([
        import('swiper/css' as any),
        import('swiper/css/pagination' as any),
        import('./styles/index.scss')
      ]);
    };



    loadSwiper();

    // Enable smooth scrolling after load
    setTimeout(() => {
      setLenisOptions({ lerp: 1.08, duration: 12 });
    }, 1000);

    return () => {
      clearTimeout(gsapTimer);
    };
  }, []);

  const getPage = useCallback(() => {
    if (pathname === "/" || pathname === undefined) {
      return <HomePage />;
    } else if (pathname === "/privacy-policy") {
      return <LazyPrivacyPolicy />;
    } else {
      return <LazyNotFoundPage />;
    }
  }, [pathname]);

  const page = getPage();

  return (
    <WindowSizeProvider>
      <ReactLenis root>
        {gsapLoaded && (
          <Suspense fallback={null}>
            <LazyGSAP />
          </Suspense>
        )}
        <Header />
        <div className=''>
          {page}
          <Suspense fallback={<div style={{ height: '200px' }} />}>
            <LazyFooter />
          </Suspense>
        </div>
      </ReactLenis>
    </WindowSizeProvider>
  )
}

export default App
