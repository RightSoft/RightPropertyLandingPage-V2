import BackToBackReveal from "../components/back-to-back-reveal"
import BinarySection from "../components/binary-section"
import ChoosePresentationSection from "../components/choose-presentation/section"
import ConvertMoreLeadsSection from "../components/convert-more-leads/section"
import EasyOnboardingSection from "../components/easy-onboarding/section"
import EnhancedPresentationsSection from "../components/enhanced-presentations/section"
import FaqSection from "../components/faq/section"
import FeaturesCarousel from "../components/features-carousel"
import MadeToFit from "../components/made-to-fit/section"
import MeetRightPropertySection from "../components/meet-right-property/section"
import PresentSmarterSection from "../components/present-smarter/section"
import ScheduleADemoSection from "../components/schedule-a-demo/section"
import SimpleSetupSection from "../components/simple-setup/section"
import LevelUpYourMarketing from "../components/sliding-sections/level-up-your-marketing"
export default function HomePage() {
    return (
        <div className="">
            <EnhancedPresentationsSection />
            <MeetRightPropertySection />
            <PresentSmarterSection />
            <ChoosePresentationSection/>
            <BinarySection subHeader="Did you know?" title="Built by software minds" description="Engineering is in our DNA. That’s whyRight Property runs like a product, not a service from agency." />
            <SimpleSetupSection />
            <ConvertMoreLeadsSection/>
            <EasyOnboardingSection/>
            <BinarySection subHeader="Did you know?" title="Automated where it matters" description="We simplify the complex. Many steps you’d expect to handle manually are fully automated behind the scenes." />
            <div className="hidden lg:block"><LevelUpYourMarketing/></div>
            <FeaturesCarousel/>
            <BackToBackReveal/>
            <MadeToFit/>
            <FaqSection/>
            <ScheduleADemoSection/>
        </div>
    )
}