import BookADemoSection from "../components/book-a-demo-section/book-a-demo-section";
import FeaturesSection from "../components/features/features-section";
import LevelUpSection from "../components/level-up/level-up-section";
import OnboardSection from "../components/onboard-section/onboard-section";
import PlatformsSection from "../components/platforms/platforms-section";
import SellKeywordsContainer from "../components/sell-keywords/sell-keywords-container";
import SlideSection from "../components/slide-section/slide-section";

export default function Home() {
  return (
    <>
      <LevelUpSection />
      <SellKeywordsContainer />
      <PlatformsSection />
      <FeaturesSection />
      <SlideSection />
      <OnboardSection />
      <BookADemoSection />
    </>
  );
}
