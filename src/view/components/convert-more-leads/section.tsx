import Accessibility from "@/view/components/accessiblity";
import convertMoreLeads from "@/assets/v3/convert_more_leads_desktop.png"
import convertMoreLeadsMobile from "@/assets/v3/mobile_insights.png"
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
        <section className="rp-container px-[7.5rem] pt-[7.5rem] lg:pt-0 lg:px-0 lg:py-[2.25rem] lg:pb-[0] lg:bg-[#EEF1F7] relative">
            <img src={convertMoreLeadsMobile} alt="convert more leads" className="z-[-1] w-full h-auto hidden lg:block" />
            <img src={convertMoreLeads} alt="convert more leads" className="z-[-1] absolute top-0 left-0 w-full h-auto lg:hidden" />
            <div className="w-[49.375rem] lg:w-full lg:p-4 relative lg:-mt-[4rem]">
                <div className="absolute left-[7.6rem] top-[0] w-[375px] h-[68px]" style={{ background: "linear-gradient(180deg, rgba(238, 241, 247, 0) 0%, #EEF1F7 100%)" }} />

                <Parallax id="convert-more-leads-section" speed={1.3}>
                    <Accessibility subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." items={items} />
                </Parallax>
            </div>
            <div className="hidden lg:block absolute bottom-0 w-full h-[13rem] bg-white z-[-1]">

</div>
        </section>
    )
}