import innerCircle from "@/assets/inner-circle.png";
import innerCircleMobile from "@/assets/powerful_mobile.png";
export default function PowerfulCMS() {
    return (

        <div className="lg:bg-[#F5F5F5] lg:h-[42rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex gap-[8.4375rem] lg:gap-[2.5rem] lg:flex-col-reverse items-center justify-center">
                    <div className="flex flex-col">
                        <p className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            Powerful & intuitive CMS
                        </p>
                                    <h3 className="mb-10 font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                Powerful yet intuitive CMS to reflect your project's branding on every platform.
            </h3>
                    </div>
                    <img className="block lg:hidden w-[33.125rem] h-auto" src={innerCircle} alt="Fully interactive project website" />
                    <img className="hidden lg:block lg:w-full lg:px-2" src={innerCircleMobile} alt="Fully interactive project website" />

                </div>
            </div>
        </div>
    )
}