import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import PricingCard from "./pricing-card";
import PricingCardSmall from "./pricing-card-small";
import PricingCardWide from "./pricing-card-wide";
import { useRef } from "react";
import AddonsSlide from "./addons-slide";
import { webFeatures, marketingFeatures, leadTrackingFeatures, multiDevelopmentFeatures, interactiveSiteplanFeatures } from "./pricing-data";

export default function PricingSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    useSectionView({ inView: isInView, key: 'pricing' })

    return <div

        id="pricing"
        style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #E6E6E6 100%)'
        }}
        className="pt-[3.75rem] pb-[12rem] flex flex-col items-center mobile:pt-[1.875rem] mobile:pb-[1.125rem]"

    >
        <SectionTitle text={"Transparent Pricing"} className="mb-[1.875rem]" />
        <SectionDescription variant="md" className="w-[51.3125rem] mb-[3.4375rem] mobile:w-[15.625rem] mobile:mb-[1.718rem]">
            We're committed to providing <b>clear, upfront pricing</b> so you can plan your budget without any guesswork. Unlike our competitors, we display our rates <b>openly</b>, ensuring you receive fair treatment regardless of your company's size.
            <br />
        </SectionDescription>
        <div ref={ref} className="mobile:text-rpBlue mobile:w-full mobile:justify-center mobile:items-center flex gap-[0.875rem] section pb-[3.437rem] mobile:pb-[1.71875rem] mobile:flex-col  mobile:gap-2.5">
            <div className="bg-[#CFFAEA] mobile:w-full mobile:flex mobile:justify-center py-[1.75rem] px-5 mobile:px-0 rounded-[32px] mobile:rounded-[10px]">
                <PricingCardWide />
            </div>
            <div className="bg-[#FFE0EB] py-[1.75rem] mobile:justify-center px-5 rounded-[32px] mobile:px-0 mobile:rounded-[10px] flex gap-[1.125rem] w-[47.68625rem] mobile:w-full mobile:gap-[0.56rem]">
                <PricingCard title={"Web Only"} features={webFeatures} price={150} />
                <PricingCard title={"Marketing Suite"} features={marketingFeatures} price={300} />
            </div>
        </div>
        <SectionTitle text={"ADDONS"} className="mb-[1.875rem] mobile:mb-[1.6875rem]" />
        <div className="flex gap-[1.06126rem] mobile:hidden">
            <PricingCardSmall title={"Lead Tracking"} features={leadTrackingFeatures} price={250} />
            <PricingCardSmall title={"Multi Development"} features={multiDevelopmentFeatures} price={100} />
            <PricingCardSmall title={"3D Interactive Siteplan"} features={interactiveSiteplanFeatures} />
        </div>
        <div className="hidden mobile:block">
            <AddonsSlide />
        </div>
    </div>
}