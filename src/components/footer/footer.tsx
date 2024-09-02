import { useGSAP } from "@gsap/react";
import AnchorLink from "../anchor-link";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import Twitter from "../icons/twitter";
import RpLogo from "../rp-logo";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import useWindowSize from "../../hooks/use-window-size";
export default function Footer() {
    const container = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    useEffect(() => {
        let footer = document.querySelector("footer"),
            getOverlap = () => Math.min(window.innerHeight, footer!.offsetHeight), 
            adjustFooterOverlap = () => footer!.style.marginTop = -getOverlap() + "px";

        adjustFooterOverlap();

        let scrollTriggerInstance = ScrollTrigger.create({
            trigger: footer,
            start: () => "top " + (window.innerHeight - getOverlap()),
            end: () => "+=" + getOverlap(),
            pin: true,
        });

        const handleResize = () => {
            adjustFooterOverlap();
            scrollTriggerInstance.refresh(); // Recalculate the ScrollTrigger positions
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollTriggerInstance.kill(); // Clean up on component unmount
        };
    }, [width]);
    return <footer ref={container} className=" bg-[#F8F8F9] z-0 relative "
        style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F5F9FA 100%)"
        }}
    >
        <div className="section py-[5.125rem] pr-[5.625rem] pl-[7.25rem] w-full flex justify-between mobile:px-5 mobile:py-[1.875rem]">
            <div className="mobile:w-full">
                <div className="mb-[2.3906rem] mobile:hidden">
                    <RpLogo className="w-[7.0625rem]" />
                </div>
                <div className="mobile:block hidden mb-10">
                    <RpLogo className="w-[3.3125rem]" />
                </div>
                <div className="mobile:block hidden ">
                    <ul className="flex flex-col gap-3 text-[#7BD6E1] text-start text-[0.8125rem] leading-[1.21em] mb-10">
                        <li>
                            <AnchorLink href="features">Features</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="onboarding">Onboarding</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="book-a-demo">Book A Demo</AnchorLink>
                        </li>
                        {/* <li>
                        <AnchorLink href="pricing">Pricing</AnchorLink>
                    </li> */}
                    </ul>
                </div>
                <div className="mobile:flex justify-between items-center hidden ">
                    <div className="flex gap-[0.8125rem] text-[#7BD6E1] ">
                        <a href="https://twitter.com/ukrightproperty" target="_blank"><Twitter className=" w-6" /></a>
                        <a href="https://www.instagram.com/rightpropertyapp/" target="_blank"><Instagram className=" w-6" /></a>
                        <a href="https://uk.linkedin.com/company/rightpropertyapp" target="_blank"><Linkedin className=" w-6" /></a>
                    </div>
                    <a href="https://rightsoft.co.uk">
                        <div className="text-[#7BD6E1] text-xs">
                            Powered by <b>Rightsoft</b>
                        </div>
                    </a>
                </div>
                <div className="text-[#83869D] font-light text-[1rem] leading-[1.21875rem] w-[12.625rem] mb-[2.29rem] mobile:hidden">
                    Highland House 401<br />
                    165 The Broadway,<br /><br />
                    SW19 1NE <br />
                    United Kingdom
                </div>
                <div className="flex gap-[2.53125rem] mobile:hidden">
                    <a href="https://twitter.com/ukrightproperty" target="_blank"><Twitter className="text-[#525361] w-10" /></a>
                    <a href="https://www.instagram.com/rightpropertyapp/" target="_blank"><Instagram className="text-[#525361] w-10" /></a>
                    <a href="https://uk.linkedin.com/company/rightpropertyapp" target="_blank"><Linkedin className="text-[#525361] w-10" /></a>
                </div>
            </div>
            <div className="mobile:hidden">
                <ul className="flex flex-col gap-[1.875rem] text-[#83869D] text-end text[1.25rem] leading-[1.52375rem] mb-[5.3068rem]">
                    <li>
                        <AnchorLink href="features">Features</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="onboarding">Onboarding</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="book-a-demo">Book A Demo</AnchorLink>
                    </li>
                    {/* <li>
                    <AnchorLink href="pricing">Pricing</AnchorLink>
                </li> */}
                </ul>
                <a target="_blank" href="https://rightsoft.co.uk">
                    <div className="text-[#525361] leading-[1rem]">
                        Powered by <b>Rightsoft</b>
                    </div>
                </a >
            </div>
        </div>

    </footer>
}