import gsap from "gsap";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function MeetRightPropertySection() {
    useEffect(() => {
        const splitAnimation = () => {
            const splitText = new SplitText(".meet-right-property-text", {
                type: "chars",
                linesClass: "line"
            })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#meet-right-property",
                    start: "center center",
                    end: "+=1800",
                    pin: 'body',
                    scrub: true,
                }
            }).set(
                splitText.chars,
                {
                    color: "#232323",
                    stagger: 0.1
                },
                0.1
            );
        }
        setTimeout(() => {
            splitAnimation()
        }, 300);
        
    }, [])
    return (
        <section id="meet-right-property" className="rp-container mb-35 flex gap-[3.25rem] lg:gap-0 lg:flex-col items-start justify-center pt-[13.75rem] pb-[7.5rem] lg:py-0" aria-label="Meet Right Property features">
            <div className='max-w-[50.75rem]'>
                <div className="pl-[1.25rem] flex flex-col justify-start  lg:p-6 lg:justify-start lg:h-auto min-h-[30rem] lg:min-h-0">
                    <div className="mt-[0] lg:mt-3 flex flex-col w-full lg:w-full">
                        <h2 className="mb-[0.625rem] font-geist-mono font-normal text-16 leading-[150%] tracking-[4%] uppercase text-squid-ink lg:text-14 lg:mb-[1.25rem]">
                            Meet Right Property
                        </h2>
                        <p className="mb-[2.125rem] font-geist font-normal text-40 leading-[120%] -tracking-[0.04em] text-[#D7D7D7] lg:text-30 lg:mb-[1.25rem] meet-right-property-text">
                            Property sales require more than just listings, 3D models, and brochures—it's about
                            <span className="inline-flex items-center ml-3">
                                <NumberIndicator number="1" />
                                <span className="ml-2">connecting</span>
                            </span>
                            <span className='inline-flex ml-2'> with buyers,</span>
                            <span className="inline-flex items-center ml-3">
                                <NumberIndicator number="2" />

                            </span>
                            <span className="ml-2">tracking every opportunity, and</span>
                            <span className="ml-2 inline-flex items-center">
                                <NumberIndicator number="3" />

                            </span>
                            <span className="ml-2 lg:ml-0">turning interest into action.</span>
                        </p>
                        <p className='mb-[5rem] lg:mb-[0] font-geist font-normal text-24 leading-[140%] lg:text-18'>
                            Right Property gives you precisely what you need to make your sales and marketing efforts truly count.
                        </p>
                        <h3 className="lg:hidden font-geist-mono font-normal text-16 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                            Trusted by <span className="font-semibold">forward-thinking developers</span>
                        </h3>
                    </div>

                </div>
            </div>

        </section>
    );
}

const NumberIndicator = ({ number }: { number: string }) => {
    return (
        <span className="inline-flex items-center justify-center w-[2.75rem] h-[2.75rem] bg-blue-light rounded-full lg:w-[1.75rem] lg:h-[1.75rem]">
            <span className="text-[#D7D7D7] font-geist font-medium text-28 leading-[120%] lg:text-base">
                {number}
            </span>
        </span>
    );
};