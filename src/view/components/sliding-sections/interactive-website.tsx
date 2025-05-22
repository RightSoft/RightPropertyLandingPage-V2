import fullyInteractiveImage from "@/assets/fully-interactive.png";
export default function InteractiveWebsiteSection() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[48rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex gap-[8.4375rem] items-center justify-center lg:gap-0">
                    <div className="flex flex-col">
                        <img className="w-full hidden lg:block px-2" src={fullyInteractiveImage} alt="Fully interactive project website" />
                        <h4 className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            Interactive website
                        </h4>
                        <h5 className="mb-[2.5rem] font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            Providing a fully interactive project website that mirrors<br />the in-person experience
                        </h5>
                    </div>
                    <img className="w-[33.125rem] h-auto lg:hidden" src={fullyInteractiveImage} alt="Fully interactive project website" />
                </div>
            </div>
        </div>

    )
}