import presentSmarterBg from "@/assets/v3/present_smarter_section.webp"
import presentSmarterBgMobile from "@/assets/v3/mobile_present_smarter.png"
import Accessibility from "@/view/components/accessiblity"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.png';
import spaceIcon from '@/assets/v3/space_icon.png';
export default function PresentSmarterSection() {
    
    const items = [
        {
            title: "Interactive & Non-linear storytelling",
            description: "Break the limitations of traditional presentations. Let your audience explore freely, follow their curiosity, and experience your project in a way that fits the moment.",
            icon: <img src={startIcon} alt="interactive storytelling icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: "Ready for Every Screen, Every Space",
            description: "Whether it’s a large-scale presentation in a sales suite or a one-on-one meeting on a tablet, Right Property adapts to the setting—without losing impact.",
            icon: <img src={spaceIcon} alt="responsive design icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[30rem] lg:mb-[3rem]">
            <section className="rp-container lg:bg-none! lg:bg-[#EEF1F7] lg:h-auto! relative" style={{ height: "63.25rem", backgroundImage: `url(${presentSmarterBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <img src={presentSmarterBgMobile} alt="present smarter" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem]" />
                <div className="flex p-[7.5rem] justify-end lg:p-4">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="Present smarter, your way" subHeading="Presentation" description="A property is more than floor plans and price lists - it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting." items={items} />
                        </div>
                    </Parallax>
                </div>
                <div className="hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[-1]">

                </div>
            </section>
        </div>


    )
}





