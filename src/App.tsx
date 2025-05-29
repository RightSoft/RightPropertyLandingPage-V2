import ReactLenis from 'lenis/react';
import './styles/index.css'

import HomePage from './view/pages/home-page';
import Header from './view/components/header';
import { useEffect, useState, Suspense, lazy } from 'react';
import PrivacyPolicy from './view/pages/privacy-policy';

// Lazy load non-critical components and GSAP
const LazyFooter = lazy(() => import('./view/components/footer/section'));
const LazyGSAP = lazy(() => import('./lib/gsap.tsx').then(module => ({ default: module.default })));

function App() {
  const [pathname, setPathname] = useState<string>();
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [lenisEnabled, setLenisEnabled] = useState(false);
  
  useEffect(() => {
    setPathname(window.location.pathname);
    
    // Defer GSAP loading until after initial render
    const gsapTimer = setTimeout(() => {
      setGsapLoaded(true);
    }, 100);
    
    // Defer Lenis until after LCP
    const lenisTimer = setTimeout(() => {
      setLenisEnabled(true);
    }, 1000);
    
    // Defer non-critical CSS
    const loadSwiper = () => {
      // Use dynamic imports with proper typing
      Promise.all([
        import('swiper/css' as any),
        import('swiper/css/pagination' as any),
        import('./styles/index.scss')
      ]);
    };
    
    // Truly lazy load Google Analytics - only after user interaction or 5+ seconds
    const loadGoogleAnalytics = () => {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-D169WBQW9L';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-D169WBQW9L');
    };
    
    // Load analytics on first user interaction OR after 5 seconds
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    const loadAnalyticsOnce = () => {
      loadGoogleAnalytics();
      events.forEach(event => {
        document.removeEventListener(event, loadAnalyticsOnce, true);
      });
    };
    
    events.forEach(event => {
      document.addEventListener(event, loadAnalyticsOnce, true);
    });
    
    // Fallback: load after 5 seconds regardless
    const analyticsTimer = setTimeout(loadAnalyticsOnce, 5000);
    
    loadSwiper();
    
    return () => {
      clearTimeout(gsapTimer);
      clearTimeout(lenisTimer);
      clearTimeout(analyticsTimer);
      events.forEach(event => {
        document.removeEventListener(event, loadAnalyticsOnce, true);
      });
    };
  }, []);
  
  const page = pathname === "/privacy-policy" ? <PrivacyPolicy /> : <HomePage />;

  if (!lenisEnabled) {
    // Render without Lenis initially for faster LCP
    return (
      <div>
        {gsapLoaded && (
          <Suspense fallback={null}>
            <LazyGSAP />
          </Suspense>
        )}
        <Header />
        <div className=''>
          {page}
          <Suspense fallback={<div style={{height: '200px'}} />}>
            <LazyFooter />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <ReactLenis
      options={{
        lerp: 0.08,
      }}
      root
    >
      {gsapLoaded && (
        <Suspense fallback={null}>
          <LazyGSAP />
        </Suspense>
      )}
      <Header />
      <div className=''>
        {page}
        <Suspense fallback={<div style={{height: '200px'}} />}>
          <LazyFooter />
        </Suspense>
      </div>
    </ReactLenis>
  )
}

export default App
