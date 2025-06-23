import presentSmarter1 from "@/assets/present_smarter_1.webp"
import presentSmarter2 from "@/assets/present_smarter_2.webp"
import presentSmarter3 from "@/assets/present_smarter_3.webp"
import presentSmarter4 from "@/assets/present_smarter_4.webp"
import Accessibility from "@/view/components/accessiblity"
import magicStick from "@/assets/icons/magic_stick.png"
import slider from "@/assets/icons/slider.png"
import { Parallax } from "../parallax"
export default function PresentSmarterSection() {
    const items = [
        {
            title: "Interactive and non-linear storytelling",
            description: "Break the limitations of traditional presentations. Let your audience explore freely, follow their curiosity, and experience your project in a way that fits the moment.",
            icon: <img src={magicStick} alt="interactive storytelling icon" className="w-[1.5rem] h-auto object-contain" />
        },
        {
            title: "Ready for every screen, every space",
            description: "Whether it’s a large-scale presentation in a sales suite or a one-on-one meeting on a tablet, Right Property adapts to the setting—without losing impact.",
            icon: <img src={slider} alt="responsive design icon" className="w-[1.5rem] h-auto object-contain" />
        }
    ]
    return (

        <section className="rp-container pt-[4rem] pb-[2rem] lg:pt-6 lg:pb-[4.5rem] px-[5.875rem] lg:px-0">
            <div className="flex gap-[6.875rem] justify-center lg:flex-col lg:gap-[2.25rem]">

                <div className="mt-[10rem] lg:mt-[0.625rem] flex gap-4 lg:justify-center">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="flex flex-col gap-4">
                            <img src={presentSmarter1} alt="Right Property interactive presentation interface example" className="w-[23.375rem] lg:w-[11rem] h-auto" loading="lazy" decoding="async" />
                            <img src={presentSmarter2} alt="Right Property presentation customization options" className="w-[23.375rem] lg:w-[11rem] h-auto" loading="lazy" decoding="async" />
                        </div>
                    </Parallax>
                    <Parallax id="present-smarter-section" speed={1.8}>
                        <div className="mt-120 flex flex-col gap-4">
                            <img src={presentSmarter3} alt="Right Property interactive features showcase" className="w-[23.375rem] lg:w-[10.375rem] h-auto" loading="lazy" decoding="async" />
                            <img src={presentSmarter4} alt="Right Property presentation analytics dashboard" className="w-[23.375rem] lg:w-[10.375rem] h-auto" loading="lazy" decoding="async" />
                        </div>
                    </Parallax>
                </div>

                <Parallax id="present-smarter-section" speed={0.001}>
                    <div className="w-[33.75rem] lg:w-full">
                        <Accessibility title="Present smarter, your way" subHeading="Presentation" description="A property is more than floor plans and price lists— it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting." items={items} />
                    </div>
                </Parallax>
            </div>
        </section>

    )
}





