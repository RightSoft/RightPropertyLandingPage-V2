import easyOnboardingImage from "@/assets/easy_onboarding.png"
import checkCircle from "@/assets/icons/check_circle.png"
export default function EasyOnboardingSection() {
    const items = [
        {
            icon: <img src={checkCircle} alt="check-circle" className="w-[1.5rem] h-auto object-contain" />,
            title: "Live in 48 hours",
            description: "Launch your 2D setup in as little as two days. No delays, no complex handovers.",
        },
        {
            icon: <img src={checkCircle} alt="check-circle" className="w-[1.5rem] h-auto object-contain" />,
            title: "Transparent pricing, always",
            description: "No hidden costs, no vague estimates.What you see is what you pay.",
        },
        {
            icon: <img src={checkCircle} alt="check-circle" className="w-[1.5rem] h-auto object-contain" />,
            title: "Built to grow with you",
            description: "Whether you’re showcasing 10 units or 300,The experience stays the same.",
        }
    ]
    return (
        <div className="bg-[#EEFEE1]">
            <div className="rp-container py-[7.5rem] lg:py-[2.25rem] lg:px-6">
                <div className="flex items-center justify-center space-x-[13.75rem]">
                    <img src={easyOnboardingImage} alt="easy onboarding" className="w-[35.3125rem] h-auto lg:hidden" />
                    <div className="w-[33.125rem] lg:w-full">
                        <h3 className="mb-3 font-general-sans font-semibold text-48 lg:text-40 leading-[100%] text-squid-ink">
                            Easy onboarding
                        </h3>
                        <p className="mb-12 lg:mb-[1.75rem] font-geist font-normal text-18 leading-[140%] text-squid-ink">
                            Get started in hours, scale on your terms, and pay only for what you need—no surprises.
                        </p>
                        <img src={easyOnboardingImage} alt="easy onboarding" className="w-full h-auto hidden lg:block lg:mb-[1.75rem]" />
                        <div className="flex flex-col gap-[2rem]">
                            {items.map((item) => (
                                <div className="flex gap-5 items-start">
                                    {item.icon}
                                    <div>
                                        <h4 className="mb-1 font-geist font-medium text-18 leading-[140%] text-squid-ink">
                                            {item.title}
                                        </h4>
                                        <p className="font-geist font-normal text-16 leading-[140%] text-squid-ink">
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