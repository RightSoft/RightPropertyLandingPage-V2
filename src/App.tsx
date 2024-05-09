import ActionButton from './components/buttons/action-button'
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
import BookADemoSection from './components/book-a-demo-section/book-a-demo-section'
import PricingSection from './components/pricing-section/pricing-section'
import Footer from './components/footer/footer'
import ActiveSectionProvider from './context/section-context/section-context'
import AnchorLink from './components/anchor-link'
import WindowSizeProvider from './components/window-size-provider'
import ReactGA from "react-ga4";


function App() {
  ReactGA.initialize("G-D169WBQW9L");

  return (
    <ActiveSectionProvider>
      <>
        <WindowSizeProvider />
        <Toaster />
        <Header />
        <div className='pt-[7.575rem] mobile:pt-[3.4375rem]'>
          <LevelUpSection />
          <FeaturesSection />
          <div className='flex justify-center mobile:hidden'>
            <AnchorLink href='book-a-demo'>
              <ActionButton text={"BOOK A DEMO"} className={"mb-[3.75rem]"} onClick={() => { }} />
            </AnchorLink>
          </div>
          <SlideSection />
          <OnboardSection />
          <BookADemoSection />
          {/* <PricingSection /> */}
          <Footer />
        </div>
        <WindowSizeProvider />
      </>
    </ActiveSectionProvider>
  )
}

export default App
