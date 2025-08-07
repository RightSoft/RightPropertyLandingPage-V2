import Accessibility, { AccessibilityHeaderInformation, AccessibilityItems, AccessibilityRoot } from "@/view/components/accessiblity";
import mobileInsights from "@/assets/mobile_insights.webp";
import Button from "../button";
import ShowBookingHoc from "../show-booking-hoc";
import convertMoreLeads from "@/assets/v3/convert_more_leads_desktop.png"
import startIcon from '@/assets/v3/star_icon.png';
import spaceIcon from '@/assets/v3/space_icon.png';
import { Parallax } from "../parallax";
export default function ConvertMoreLeadsSection() {
    const items = [
        {
            icon: <img src={startIcon} alt="interactive storytelling icon" className="w-[5rem] h-auto object-contain" />,
            title: "Track performance, improve results",
            description: "See how your team performs, track KPIs, and optimize what works—without manual effort.",
        },
        {
            icon: <img src={spaceIcon} alt="responsive design icon" className="w-[5rem] h-auto object-contain" />,
            title: "User-centered and intuitive platform",
            description: "No clutter, no complexity. It’s just a CRM that’s intuitive, focused, and easy to use from day one.",
        }
    ]
    return (
        <section className="rp-container px-[7.5rem] pt-[7.5rem] lg:px-0 lg:py-[2.25rem]">
            <img src={convertMoreLeads} alt="convert more leads" className="z-[-1] absolute top-0 left-0 w-full h-auto" />
            <div className="w-[49.375rem] lg:w-full">
                <Parallax id="convert-more-leads-section" speed={1.3}>
                    <Accessibility subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." items={items} />
                </Parallax>
            </div>

            <div className="hidden lg:flex gap-6 items-center justify-center lg:flex-col lg:gap-8">
                <AccessibilityRoot>
                    <AccessibilityHeaderInformation subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." />
                    <img src={mobileInsights} alt="sales insights" className="flex-1 h-auto mb-[2.25rem]" width="640" height="786" />
                    <AccessibilityItems items={items} />
                    <div className="hidden lg:block lg:mt-[2.25rem] ">
                        <ShowBookingHoc>
                            <Button label="Book a Demo" variant="primaryLight" className="lg:w-full" />
                        </ShowBookingHoc>
                    </div>
                </AccessibilityRoot>
            </div>
        </section>
    )
}