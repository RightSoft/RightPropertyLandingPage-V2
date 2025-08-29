import footerBg from "@/assets/v3/footer_bg.png"
import footerLevitate from "@/assets/v3/footer_levitate.png"
import mobileFooterBg from "@/assets/v3/mobile_right_footer.png"
import mobileFooterLevitate from "@/assets/v3/mobile_right_footer_circle.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Logo from "../header/logo"
export default function FooterSection() {
    const $levitateItem = useRef<HTMLImageElement>(null)
    const $mobileFooterLevitate = useRef<HTMLImageElement>(null)
    const $footerContainer = useRef<HTMLDivElement>(null)
    const footerItems = [
        {
            label: "Contact",
            items: [
                {
                    label: "hello[at]rightproperty.app",
                    href: "mailto:hello[at]rightproperty.app",
                    type: "email"
                },
                {
                    label: "+44 20 8050 2733",
                    href: "tel:+442080502733"
                },

            ]
        },
        // {
        //     label: "Product",
        //     items: [
        //         {
        //             label: "Presentation",
        //             href: "/"
        //         },
        //         {
        //             label: "Pricing",
        //             href: "/"
        //         },
        //         {
        //             label: "Features",
        //             href: "/"
        //         },

        //     ]
        // },
        // {
        //     label: 'Company',
        //     items: [
        //         {
        //             label: "About",
        //             href: "/"
        //         },
        //         {
        //             label: "Blog",
        //             href: "/"
        //         },

        //     ]
        // },
        {
            label: "Follow us On",
            items: [
                {
                    label: "LinkedIn",
                    href: "https://uk.linkedin.com/company/rightpropertyapp"
                },

            ]
        },
        {
            label: "Legal",
            items: [
                {
                    label: "Privacy Policy",
                    href: "/privacy-policy"
                },
            ]
        }
    ]
    function emailClickHandler(item: { label: string; href: string; type: string } | { label: string; href: string; type?: undefined }): void {
        if (item.type === "email") {
            const emailLink = document.getElementById("email-link") as HTMLAnchorElement;
            if (emailLink) {
                emailLink.href = `mailto:hello@rightproperty.app`;
                emailLink.click();
            }
        }
    }
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 769px)', () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: $footerContainer.current,
                    start: "bottom-=20% bottom",
                    end: "bottom-=20% bottom-=5%",
                    scrub: false,
                    toggleActions: "play none none reset",
                }
            },)
            tl.to($levitateItem.current, {
                y: '-6.25rem',
                duration: 1,
                ease: "power2.inOut"
            })
        })
        mm.add('(max-width: 768px)', () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: $footerContainer.current,
                    start: "bottom-=20% bottom",
                    end: "bottom-=20% bottom-=5%",
                    scrub: false,
                    toggleActions: "play none none reset",
                }
            },)
            tl.to($mobileFooterLevitate.current, {
                y: '-1rem',
                duration: 1,
                ease: "power2.inOut"
            })
        })
    }, [])
    return <div ref={$footerContainer} className="rp-container">
        <div className="relative h-[45.3125rem] lg:h-auto lg:p-0 px-[5rem] pt-[7.125rem] lg:w-full">
            <img ref={$levitateItem} src={footerLevitate} className="absolute left-[36.25rem] top-[29.25rem] w-[21.25rem] h-auto object-contain z-[0] lg:hidden" alt="" />
            <img src={footerBg} className="absolute bottom-0 left-0 w-[105rem] h-full object-cover z-[-1] lg:hidden" alt="" />

            <div className="flex justify-between lg:flex-col">
                <div className="flex flex-[0.5_1_30%] lg:flex-[1_0_100%] lg:items-start flex-col gap-2">
                    <Logo className="w-[8.25rem] lg:w-[7.875rem] h-auto mb-[7.125rem] lg:mb-[4rem] lg:px-4" />
                    <CopyRight className="lg:hidden" />
                </div>
                <div className="flex flex-row-reverse lg:flex-col gap-[3.75rem] lg:gap-[2.5rem] mb-[5rem] lg:mb-[2rem] lg:px-4 lg:flex-wrap ">
                    {
                        footerItems.map((item) => (
                            <div key={item.label} className="">
                                <h4 className="mb-6 lg:mb-4 text-[#48515B] font-geist-mono text-16 lg:text-sm font-medium leading-[122%] tracking-[0em] uppercase">{item.label}</h4>
                                <ul className="mb-[0.5rem] font-geist text-20 font-medium leading-[1.4em] tracking-[0%] text-[#48515B]">
                                    {
                                        item.items.map((item) => (
                                            <li className="lg:mb-2" key={item.label}><a target="_blank" id={item.type === "email" ? "email-link" : ""} onTouchStart={() => emailClickHandler(item)} onMouseDown={() => emailClickHandler(item)} rel="noopener" href={item.href}>{item.label}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <CopyRight className="hidden lg:block lg:px-4 mb-[4rem]" />
            </div>
            <div className="relative">
                <img src={mobileFooterBg} className="w-full h-auto object-cover z-[-1] hidden lg:block" alt="" />
                <img ref={$mobileFooterLevitate} src={mobileFooterLevitate} className="absolute left-[8.148125rem] top-[5.375rem] w-[4.6418rem] h-auto object-contain z-[0] hidden lg:block" alt="" />

            </div>
        </div>
    </div>
}

const CopyRight = ({ className }: { className?: string }) => {
    const year = new Date().getFullYear()
    return <div className={className}>
        <span className="font-geist text-14 font-normal leading-[24px] tracking-[0] text-[#8D98A5]" >
            © {year} Right Property Ltd
        </span>
        {/* <span className="font-geist text-[0.8rem] leading-[1.3em] font-normal  tracking-[0] text-[#8D98A5]" >
            House 401, Highland, 165 The Broadway, London SW19 1NE, United Kingdom
        </span> */}
    </div>
}