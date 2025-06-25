import switchTemplatesImage from "@/assets/switch_templates.webp";
import switchMobile from "@/assets/switch_mobile.webp";
export default function SwitchBetweenTemplates() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[42rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex gap-[8.4375rem] lg:gap-[2.25rem] lg:flex-col items-center justify-center">
                    <img className="lg:hidden w-[33.125rem] lg:w-full h-auto lg:px-2" src={switchTemplatesImage} alt="Fully interactive project website" />
                    <img className="hidden lg:block lg:w-full h-auto lg:px-2" src={switchMobile} alt="Fully interactive project website" />
                    <div className="flex flex-col">
                        <p className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            ready-to-use templates
                        </p>
                        <h3 className="mb-[2.5rem] font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            Switch between ready-to-use templates or customize campaign pages
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    )
}