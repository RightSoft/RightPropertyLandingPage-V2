import surfaceImage from '@/assets/v3/surface.png'
import spaceImage from '@/assets/v3/space.png'

export default function ChoosePresentationSection() {
    return (
        <section id="experiences" className="rp-container" aria-label="Choose between Surface 2D and Space 3D presentation modes">
            <div className="flex flex-col items-start justify-start lg:px-0 lg:items-start">
                <p className=" pl-[5rem] mb-8 lg:mb-[1.5rem] font-geist-mono font-medium text-16 lg:text-14 lg:px-4 lg:text-start lg:text-sm leading-[150%] tracking-[0.04em] uppercase text-squid-ink">Choose the Presentation Experience</p>
                <h2 className="w-[46.875rem] lg:w-full pl-[5rem] mb-[2.5rem] lg:mb-[2rem]  font-geist font-semibold text-40 lg:text-32 lg:px-4 leading-[140%] lg:leading-[130%] text-squid-ink">
                    Right Property offers two powerful ways to present
                </h2>
                <div className="flex h-[46.25rem] w-full  lg:flex-col lg:gap-0">
                    <div style={{ backgroundImage: `url(${surfaceImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="relative grow basis-[100%] pl-[5rem] pt-[4.0625rem] lg:w-full p-[0.625rem] flex flex-col  lg:items-start lg:p-6">
                        <div style={{ background: "linear-gradient(360deg, rgba(255, 255, 255, 0) -6.49%, #F1F1F1 86.98%)" }} className="z-[1] absolute top-0 left-0 w-full h-[16.825rem]"></div>

                        <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-0 leading-[100%] text-squid-ink relative z-[2]">
                            surface
                        </h3>
                        <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-0] font-geist font-normal text-base leading-[140%] text-squid-ink relative z-[2]">
                            2D, fast, cost-effective, and easy to set up
                        </p>
                    </div>
                    <div style={{ backgroundImage: `url(${spaceImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="relative grow basis-[100%] pl-[5rem] pt-[4.0625rem] lg:w-full p-[0.625rem] flex flex-col lg:p-6  lg:items-start">
                        <div style={{ background: "linear-gradient(360deg, rgba(0, 0, 0, 0) -6.49%, #000000 86.98%)" }} className="z-[1] absolute top-0 left-0 w-full h-[16.825rem]"></div>

                        <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-0 leading-[100%] text-white relative z-[2]">
                            space
                        </h3>
                        <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-0 font-geist font-normal text-base leading-[140%] text-white relative z-[2]">
                            3D, stunning, immersive, interactive.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
