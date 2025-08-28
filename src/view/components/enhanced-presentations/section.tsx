// Use public URLs for LCP images to match preloads

import BookADemoButton from '@/view/components/book-a-demo-button'
import heroVideo from "@/assets/v3/hero.webm"
import BlueExploreButton from '../blue-explore-button';
import mobileRoad1 from '@/assets/v3/mobile_road_1.png';
import HeroVideoContainer from './hero-video-container';

export default function EnhancedPresentationsSection() {
    return (
        <section className=" w-full h-[auto] lg:pb-[0] relative max-w-[100vw] overflow-hidden" aria-label="Enhanced presentations hero section">
            <div className="rp-container relative flex items-center justify-between lg:flex-col lg:items-start pt-[8.5rem] lg:pt-[3.5rem] ">
                <div className="pl-[5rem] lg:px-4 lg:w-full flex flex-col items-start justify-center  font-general-sans min-h-[40rem] lg:min-h-0 lg:order-2">
                    <h1 className="mb-[2.0625rem] lg:mb-[0.875rem] font-general-sans font-semibold text-60 lg:text-40 leading-[100%] tracking-[0%] text-raisin-black">
                        Enhanced <br />Presentations. <br />
                        Smarter Sales.
                    </h1>

                    <div className="mb-[2.5625rem] lg:mb-[1.5rem] w-[28.875rem] lg:w-full font-geist font-normal text-32 lg:text-24  leading-[130%] -tracking-[0.01em] text-tundora">
                        The digital suite that maximises your off-plan project sales and marketing efforts.
                    </div>
                    <div className="flex lg:flex-col lg:w-full lg:gap-[0.75rem] gap-30">
                        <BlueExploreButton href="meet-right-property" title="Explore" />
                        <BookADemoButton className="lg:w-full" />
                    </div>
                </div>
                <div className="flex-shrink-1 lg:order-1 lg:mb-0 -mr-[21.3125rem] lg:-mr-[7rem] ">

                       <HeroVideoContainer/>
                       {/* <video
                            src={heroVideo}
                            className="max-w-[1200px] w-[75.25rem] h-auto lg:max-w-full lg:w-auto lg:h-[20.25rem]"
                            width="1200"
                            height="800"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                           
                        /> */}
                </div>
            </div>
            <img src={mobileRoad1} className="hidden lg:block -mb-[7.5rem]" alt="" />

        </section>
    )
}

