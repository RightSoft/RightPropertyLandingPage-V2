import fullyInteractiveImage from "@/assets/fully-interactive.png";
export default function SwitchBetweenTemplates() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[48rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex gap-[8.4375rem] lg:gap-0 lg:flex-col items-center justify-center">
                    <img className="w-[33.125rem] lg:w-full h-auto lg:px-2" src={fullyInteractiveImage} alt="Fully interactive project website" />
                    <div className="flex flex-col">
                        <h4 className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            ready-to-use templates
                        </h4>
                        <h5 className="mb-[2.5rem] font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            Switch between ready-to-use templates or customize campaign pages
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    )
}