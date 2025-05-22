import seoReadyImage from "@/assets/seo-ready.png";
export default function SeoReady() {
    return (
        <div className="lg:bg-[#F5F5F5] lg:h-[48rem]">
            <div className="rp-container lg:pb-[2.25rem]">
                <div className="flex lg:flex-col-reverse gap-[8.4375rem] lg:gap-[2.25rem] items-center justify-center">
                    <div className="flex flex-col">
                        <h4 className="mb-4 font-geist-mono text-base font-normal leading-[150%] tracking-[0.04em] uppercase lg:px-6">
                            Powerful & intuitive CMS
                        </h4>
                        <h5 className="mb-10 font-general-sans text-56 lg:text-36 font-semibold leading-[100%] tracking-[0em] w-[40rem] lg:w-full lg:px-6">
                            SEO-ready out of the box, ensuring your project ranks higher and attracts the right audience.
                        </h5>
                    </div>
                    <img className="w-[33.125rem] lg:w-full h-auto lg:px-2" src={seoReadyImage} alt="Fully interactive project website" />
                </div>
            </div>
        </div>
    )
}