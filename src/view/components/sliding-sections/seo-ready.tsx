import seoReadyImage from "@/assets/seo-ready.png";
import seoReadyMobile from "@/assets/cms_mobile.png";   
export default function SeoReady() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[42rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex lg:flex-col-reverse gap-[8.4375rem] lg:gap-[2.25rem] items-center justify-center">
                    <div className="flex flex-col">
                        <p className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            SEO Optimization
                        </p>   
                        <h2 className="mb-10 font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            SEO-ready out of the box, ensuring your project ranks higher and attracts the right audience.
                        </h2>
                    </div>
                    <img className="lg:hidden w-[33.125rem] lg:w-full h-auto lg:px-2" src={seoReadyImage} alt="SEO optimization dashboard showing search engine rankings" loading="lazy" decoding="async" />
                    <img className="hidden lg:block lg:w-full h-auto lg:px-2" src={seoReadyMobile} alt="SEO optimization dashboard showing search engine rankings" loading="lazy" decoding="async" />

                </div>
            </div>
        </div>
    )
}