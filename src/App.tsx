import Header from "./components/header/header";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/index.scss";
import "lenis/dist/lenis.css";
// import PricingSection from './components/pricing-section/pricing-section'
import Footer from "./components/footer/footer";
import ActiveSectionProvider from "./context/section-context/section-context";
import WindowSizeProvider from "./components/window-size-provider";
import ReactGA from "react-ga4";
import GSAP from "./lib/gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Campaign from "./pages/campaign";
import Home from "./pages";

function App() {
  ReactGA.initialize("G-D169WBQW9L");
  const [pathname, setPathname] = useState<string>();
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const page = pathname === "/campaign" ? <Campaign /> : <Home />;
  return (
    <ReactLenis
      options={{
        lerp: 0.08,
      }}
      root
    >
      <GSAP />
      <ActiveSectionProvider>
        <LazyMotion features={domAnimation}>
          <WindowSizeProvider />
          <Toaster />
          <Header />
          <div className="pt-[7.51rem] mobile:pt-[3.4375rem]">
            {page}
            <Footer />
          </div>
          <WindowSizeProvider />
        </LazyMotion>
      </ActiveSectionProvider>
    </ReactLenis>
  );
}

export default App;
