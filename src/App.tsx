import FeaturesSection from './components/features/features-section'
import Header from './components/header/header'
import LevelUpSection from './components/level-up/level-up-section'
import OnboardSection from './components/onboard-section/onboard-section'
import SlideSection from './components/slide-section/slide-section'
import { Toaster } from "react-hot-toast";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/index.scss'
import 'lenis/dist/lenis.css'
import BookADemoSection from './components/book-a-demo-section/book-a-demo-section'
// import PricingSection from './components/pricing-section/pricing-section'
import Footer from './components/footer/footer'
import ActiveSectionProvider from './context/section-context/section-context'
import WindowSizeProvider from './components/window-size-provider'
import SellKeywordsContainer from './components/sell-keywords/sell-keywords-container'
import PlatformsSection from './components/platforms/platforms-section'
import GSAP from './lib/gsap'
import { ReactLenis } from '@studio-freight/react-lenis'
import CookiePopupProvider from './components/cookie-popup/cookie-popup-provider'


function App() {

  return (
    <ReactLenis options={{
      lerp: 0.08
    }} root>
      <GSAP />
      <ActiveSectionProvider>
        <>
          <WindowSizeProvider />
          <Toaster />
          <Header />
          <div className='pt-[7.51rem] mobile:pt-[3.4375rem]'>
            <LevelUpSection />
            <SellKeywordsContainer />
            <PlatformsSection />
            <FeaturesSection />
            <SlideSection />
            <OnboardSection />
            <BookADemoSection />
            {/* <FAQSection/> */}
            <Footer />
          </div>
          <CookiePopupProvider />
          <WindowSizeProvider />
        </>
      </ActiveSectionProvider>
    </ReactLenis>
  )
}

export default App
