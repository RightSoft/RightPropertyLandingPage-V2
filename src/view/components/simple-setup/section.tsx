import rBlockImage from "@/assets/r-block.webp"
import checkCircleBlue from "@/assets/icons/check_circle_blue.png";
export default function SimpleSetupSection() {

    const items: { icon: React.ReactNode, title: string, description: string }[] = [
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for simple setup feature" className="w-[1.5rem] h-auto object-contain" />,
            title: "Plug in your content",
            description: "Upload floor plans, renders, brochures, videos, and even 3D tour.",
        },
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for support feature" className="w-[1.5rem] h-auto object-contain" />,
            title: "We’ve got you covered",
            description: "No visuals or assets? Our team can produce what’s needed.",
        },
        {
            icon: <img src={checkCircleBlue} alt="checkmark icon for easy updates feature" className="w-[1.5rem] h-auto object-contain" />,
            title: "Easy to update anytime",
            description: "Need to make changes?Just a few clicks. No waiting, no developers.",
        }
    ]

    return (
        <section className="bg-blue-soft" aria-label="Simple setup process for Right Property platform">
            <div className="rp-container py-[7.5rem] lg:py-[2.5rem] lg:px-6">
                <div className="flex justify-center gap-[8.4375rem]">
                    <img className='w-[36.875rem] h-auto lg:hidden' src={rBlockImage} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="592" height="391" />
                    <div>
                        <h2 className='mb-3 font-general-sans font-semibold  text-48 lg:text-40 leading-[100%] text-squid-ink'>Simple Setup</h2>
                        <p className='mb-16 lg:mb-[2.5rem] font-geist font-normal text-18 leading-[140%] text-squid-ink'>
                            The process is straightforward, flexible, and built to get you moving fast.
                        </p>
                        <img className='w-full h-auto lg:block hidden mb-[2.5rem]' src={rBlockImage} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="592" height="391" />

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-3 items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-18 leading-[140%] text-squid-ink'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-16 leading-[140%] text-squid-ink'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

