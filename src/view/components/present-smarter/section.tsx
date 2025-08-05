import presentSmarterBg from "@/assets/v3/present_smarter_section.webp"
import Accessibility from "@/view/components/accessiblity"
import magicStick from "@/assets/icons/magic_stick.png"
import slider from "@/assets/icons/slider.png"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.png';
import spaceIcon from '@/assets/v3/space_icon.png';
export default function PresentSmarterSection() {
    const items = [
        {
            title: "Interactive and non-linear storytelling",
            description: "Break the limitations of traditional presentations. Let your audience explore freely, follow their curiosity, and experience your project in a way that fits the moment.",
            icon: <img src={startIcon} alt="interactive storytelling icon" className="w-[5rem] h-auto object-contain" />
        },
        {
            title: "Ready for every screen, every space",
            description: "Whether it’s a large-scale presentation in a sales suite or a one-on-one meeting on a tablet, Right Property adapts to the setting—without losing impact.",
            icon: <img src={spaceIcon} alt="responsive design icon" className="w-[5rem] h-auto object-contain" />
        }
    ]
    return (
        <div className="mb-[30rem]">
            <section className="rp-container" style={{ height: "63.25rem", backgroundImage: `url(${presentSmarterBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="flex p-[7.5rem] justify-end">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="Present smarter, your way" subHeading="Presentation" description="A property is more than floor plans and price lists— it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting." items={items} />
                        </div>
                    </Parallax>
                </div>
            </section>
        </div>


    )
}





