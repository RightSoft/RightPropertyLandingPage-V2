import ReactLenis from 'lenis/react';
import HomePage from './view/pages/home-page';
import Header from './view/components/header';
import { useEffect, useState, Suspense, lazy, useCallback } from 'react';

// Lazy load non-critical components and GSAP
const LazyFooter = lazy(() => import('./view/components/footer/section'));
const LazyGSAP = lazy(() => import('./lib/gsap.tsx').then(module => ({ default: module.default })));
const LazyNotFoundPage = lazy(() => import('./view/pages/404'));
const LazyPrivacyPolicy = lazy(() => import('./view/pages/privacy-policy'));
function App() {
  const [pathname, setPathname] = useState<string>();
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [lenisOptions, setLenisOptions] = useState({ lerp: 0, duration: 0 });
  
  useEffect(() => {
    setPathname(window.location.pathname);
    
    // Defer GSAP loading until after initial render
    const gsapTimer = setTimeout(() => {
      setGsapLoaded(true);
    }, 100);
    
   
    
    // Load CSS asynchronously to avoid blocking LCP
    const loadCSS = () => {
      // Use dynamic imports with proper typing
      Promise.all([
        import('./styles/index.css'),
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
    
    loadCSS();
    
    // Enable smooth scrolling after load
    setTimeout(() => {
      setLenisOptions({ lerp: 0.08, duration: 1.2 });
    }, 1000);
    
    return () => {
      clearTimeout(gsapTimer);
      clearTimeout(analyticsTimer);
      events.forEach(event => {
        document.removeEventListener(event, loadAnalyticsOnce, true);
      });
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
    <ReactLenis options={lenisOptions} root>
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
