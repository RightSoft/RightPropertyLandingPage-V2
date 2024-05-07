import { useInView } from "framer-motion";
import useSectionView from "../../hooks/use-section-view";
import SectionDescription from "../section-description";
import SectionTitle from "../section-title";
import PricingCard from "./pricing-card";
import PricingCardSmall from "./pricing-card-small";
import PricingCardWide from "./pricing-card-wide";
import { useRef } from "react";

export default function PricingSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    useSectionView({ inView: isInView, key: 'pricing' })

    const webFeatures = [
        "Auto generated Website",
        "Custom Domain",
        "Site Analytics"
    ]
    const marketingFeatures = [
        "Desktop & Tablet Support",
        "Multi Screen Support",
        "Model Lighting",
        "Device Management",
        "Sales Rep Performance Tracking",
        "Session Management",
        "Usage Analytics",
        "Custom Data Integration"
    ]
    const leadTrackingFeatures = [
        "Lead Listing",
        "Lead Cards",
        "Lead Statistics",
        "Automated Lead Creation"
    ]
    const multiDevelopmentFeatures = [
        "Multiple Project Groups",
        "Embeddable Web Components"
    ]
    const interactiveSiteplanFeatures = [
        "Realtime 3D Siteplan",
        "Web Based 3d Siteplan"
    ]
    return <div
        
        id="pricing"
        style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #E6E6E6 100%)'
        }}
        className="pt-[3.75rem] pb-[12rem] flex flex-col items-center"

    >
        <SectionTitle text={"Transparent Pricing"} className="mb-[1.875rem]" />
        <SectionDescription variant="md" className="w-[51.3125rem] mb-[3.4375rem]">
            We're committed to providing <b>clear, upfront pricing</b> so you can plan your budget without any guesswork. Unlike our competitors, we display our rates <b>openly</b>, ensuring you receive fair treatment regardless of your company's size.
            <br />
        </SectionDescription>
        <div ref={ref} className="flex gap-[0.875rem] section pb-[3.437rem]">
            <div className="bg-[#CFFAEA] py-[1.75rem] px-5 rounded-[32px]">
                <PricingCardWide />
            </div>
            <div className="bg-[#FFE0EB] py-[1.75rem] px-5 rounded-[32px] flex gap-[1.125rem] w-[47.68625rem] ">
                <PricingCard title={"Web Only"} features={webFeatures} price={150} />
                <PricingCard title={"Marketing Suite"} features={marketingFeatures} price={300} />
            </div>
        </div>
        <SectionTitle text={"ADDONS"} className="mb-[1.875rem]" />
        <div className="flex gap-[1.06126rem] ">
            <PricingCardSmall title={"Lead Tracking"} features={leadTrackingFeatures} price={250} />
            <PricingCardSmall title={"Multi Development"} features={multiDevelopmentFeatures} price={100} />
            <PricingCardSmall title={"3D Interactive Siteplan"} features={interactiveSiteplanFeatures} />
        </div>
    </div>
}