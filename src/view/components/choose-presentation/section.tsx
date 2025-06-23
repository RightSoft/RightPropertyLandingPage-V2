import surfaceImage from '@/assets/surface.png'
import spaceImage from '@/assets/space.png'

export default function ChoosePresentationSection() {
    return (
        <section className="rp-container" aria-label="Choose between Surface 2D and Space 3D presentation modes">
            <div className="flex flex-col items-center justify-center lg:px-0 lg:items-start">
                <p className="mb-4 font-geist-mono font-normal text-16 lg:text-14 lg:px-6 lg:text-start leading-[150%] tracking-[0.04em] uppercase text-squid-ink">Choose the Presentation Experience</p>
                <h2 className="mb-[3.75rem] lg:mb-[2.5rem] font-geist font-medium text-24 lg:px-6 leading-[140%] text-squid-ink">
                    Right Property offers two powerful ways to present
                </h2>
                <div className="flex gap-6 lg:flex-col lg:gap-1">
                    <div className="w-[40rem] lg:w-full p-[0.625rem] surface-gradient flex flex-col justify-center rounded-[24px] pt-[3rem] items-center lg:items-start">
                        <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-[1.375rem] leading-[100%] text-white">
                            surface
                        </h3>
                        <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-[1.375rem] font-geist font-normal text-base leading-[140%] text-[#FFFFFF99]">
                            2D, fast, cost-effective, and easy to set up
                        </p>
                        <img 
                            src={surfaceImage} 
                            alt="Right Property Surface 2D presentation mode interface"
                            decoding="async"
                        />
                    </div>
                    <div className="w-[40rem] lg:w-full p-[0.625rem] space-gradient flex flex-col justify-center rounded-[24px] pt-[3rem] items-center lg:items-start">
                        <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-[1.375rem] leading-[100%] text-white">
                            space
                        </h3>
                        <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-[1.375rem] font-geist font-normal text-base leading-[140%] text-[#FFFFFF99]">
                            3D, stunning, immersive, interactive.
                        </p>
                        <img 
                            src={spaceImage} 
                            alt="Right Property Space 3D immersive presentation mode"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
