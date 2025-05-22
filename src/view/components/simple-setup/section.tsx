import rBlockImage from "@/assets/r-block.png"
import checkCircleBlue from "@/assets/icons/check_circle_blue.png";
export default function SimpleSetupSection() {

    const items: { icon: React.ReactNode, title: string, description: string }[] = [
        {
            icon: <img src={checkCircleBlue} alt="magic-stick" className="w-[1.5rem] h-auto object-contain" />,
            title: "Plug in your content",
            description: "Upload floor plans, renders, brochures, videos, and even 3D tour.",
        },
        {
            icon: <img src={checkCircleBlue} alt="magic-stick" className="w-[1.5rem] h-auto object-contain" />,
            title: "We’ve got you covered",
            description: "No visuals or assets? Our team can produce what’s needed.",
        },
        {
            icon: <img src={checkCircleBlue} alt="magic-stick" className="w-[1.5rem] h-auto object-contain" />,
            title: "Easy to update anytime",
            description: "Need to make changes?Just a few clicks. No waiting, no developers.",
        }
    ]

    return (
        <div className="bg-blue-soft">
            <div className="rp-container py-[7.5rem] lg:py-[2.5rem] lg:px-6">
                <div className="flex justify-center gap-[8.4375rem]">
                    <img className='w-[36.875rem] h-auto lg:hidden' src={rBlockImage} alt="r-block" />
                    <div>
                        <h3 className='mb-3 font-general-sans font-semibold  text-48 lg:text-40 leading-[100%] text-squid-ink'>Simple Setup</h3>
                        <h4 className='mb-16 lg:mb-[2.5rem] font-geist font-normal text-18 leading-[140%] text-squid-ink'>
                            The process is straightforward, flexible, and built to get you moving fast.
                        </h4>
                        <img className='w-full h-auto lg:block hidden mb-[2.5rem]' src={rBlockImage} alt="r-block" />

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-3 items-start">
                                    {item.icon}
                                    <div>
                                        <h5 className='font-geist font-medium text-18 leading-[140%] text-squid-ink'>
                                            {item.title}
                                        </h5>
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
        </div>
    )
}

