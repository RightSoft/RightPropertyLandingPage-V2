import levelUpYourMarketing from "@/assets/level-up-marketing.webp"
import BookADemoButton from "../book-a-demo-button";
export default function LevelUpYourMarketing() {
    return (
        <section className="bg-[#F5F5F5] lg:h-auto">
            <div className="rp-container">
                <div className="flex gap-[8.4375rem] items-center justify-center h-full lg:px-4 lg:py-[2.25rem]">
                    <img 
                        src={levelUpYourMarketing} 
                        className="w-[44.375rem] lg:w-full object-contain h-auto lg:hidden" 
                        alt="level-up-marketing"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="">
                        <p className="mb-4 lg:mb-3 font-geist-mono text-base lg:text-14 font-normal leading-[150%] tracking-[0.04em] uppercase">
                            Marketing
                        </p>
                        <h3 className="mb-[2.5rem] lg:mb-[1.125rem] font-general-sans text-56 lg:text-40 font-semibold leading-[100%] tracking-[0em] w-[28.625rem] lg:w-full">
                            Level up your marketing instantly
                        </h3>
                        <p className="mb-6 font-geist text-24 lg:text-18 font-normal leading-[140%] tracking-[0em] w-[28.625rem] lg:w-full">
                            Right Property extends your marketing beyond the sales office. Seamless digital marketing, connected to sales.
                        </p>
                        <div className="lg:hidden">
                            <BookADemoButton />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}