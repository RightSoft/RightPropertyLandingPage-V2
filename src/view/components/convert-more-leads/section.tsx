import Accessibility, { AccessibilityHeaderInformation, AccessibilityItems, AccessibilityRoot } from "@/view/components/accessiblity";
import magicStick from "@/assets/icons/magic_stick.png"
import mobileInsights from "@/assets/mobile_insights.png";
import Button from "../button";
import ShowBookingHoc from "../show-booking-hoc";
export default function ConvertMoreLeadsSection() {
    const items = [
        {
            icon: <img src={magicStick} alt="magic-stick" className="w-[1.5rem] h-auto object-contain" />,
            title: "Track performance, improve results",
            description: "See how your team performs, track KPIs, and optimize what works—without manual effort.",
        },
        {
            icon: <img src={magicStick} alt="magic-stick" className="w-[1.5rem] h-auto object-contain" />,
            title: "User-centered and intuitive platform",
            description: "No clutter, no complexity. It’s just a CRM that’s intuitive, focused, and easy to use from day one.",
        }
    ]
    return (
        <section className="rp-container py-[7.5rem] px-[11.75rem] lg:px-0 lg:py-[2.25rem]">
            <div className="lg:hidden flex gap-6 items-center justify-center lg:flex-col lg:gap-8">
                <div className="flex-1 flex-shrink-0 basis-[50%]">
                    <Accessibility subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." items={items} />
                </div>
                <img src={mobileInsights} alt="sales insights" className="w-[40rem] h-auto lg:hidden" />
            </div>
            <div className="hidden lg:flex gap-6 items-center justify-center lg:flex-col lg:gap-8">
                <AccessibilityRoot>
                    <AccessibilityHeaderInformation subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." />
                    <img src={mobileInsights} alt="sales insights" className="flex-1 h-auto mb-[2.25rem]" />
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