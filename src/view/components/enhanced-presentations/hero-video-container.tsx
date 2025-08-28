import heroVideo from '@/assets/v3/hero-noframe.mp4';
import heroFrame from '@/assets/v3/hero-frame.png';
export default function HeroVideoContainer() {
    return (
        <div className="relative">
            <video
                src={heroVideo}
                className="absolute w-[66.25rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[2.5rem] lg:left-[1.9rem] lg:w-[27.25rem]"
                width="1200"
                height="800"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"

            />
            <img src={heroFrame} className="w-[75.25rem] max-w-[1200px] h-auto lg:max-w-full lg:w-auto lg:h-[20.25rem]" alt="" />
        </div>
    )
}