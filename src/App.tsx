import ActionButton from './components/buttons/action-button'
import FeaturesSection from './components/features/features-section'
import Header from './components/header'
import LevelUpSection from './components/level-up/level-up-section'
import OnboardSection from './components/onboard-section/onboard-section'
import SlideSection from './components/slide-section/slide-section'
import { Toaster } from "react-hot-toast";

import './styles/index.scss'
import BookADemoSection from './components/book-a-demo-section/book-a-demo-section'
import PricingSection from './components/pricing-section/pricing-section'
import Footer from './components/footer/footer'
import ActiveSectionProvider from './context/section-context/section-context'
import AnchorLink from './components/anchor-link'

function App() {

  return (
    <ActiveSectionProvider>
      <>
        <Toaster />
        <Header />
        <div className='pt-[8.375rem]'>
          <LevelUpSection />
          <FeaturesSection />
          <div className='flex justify-center'>
            <AnchorLink href='book-a-demo'>
              <ActionButton text={"BOOK A DEMO"} className={"mb-[3.75rem]"} onClick={() => { }} />
            </AnchorLink>
          </div>
          <SlideSection />
          <OnboardSection />
          <BookADemoSection />
          <PricingSection />
          <Footer />
        </div>
      </>
    </ActiveSectionProvider>
  )
}

export default App
