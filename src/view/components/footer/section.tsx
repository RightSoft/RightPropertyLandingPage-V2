import darkLogo from "@/assets/dark_logo.webp"
import footerBg from "@/assets/v3/footer_bg.png"
import footerLevitate from "@/assets/v3/footer_levitate.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
export default function FooterSection() {
    const $levitateItem = useRef<HTMLImageElement>(null)
    const $footerContainer = useRef<HTMLDivElement>(null)
    const year = new Date().getFullYear()
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
            y: -100,
            duration: 1,
            ease: "power2.inOut"
        })
    }, [])
    return <div ref={$footerContainer} className="rp-container lg:py-[2.5rem] lg:px-6">
        <div className="relative h-[45.3125rem] px-[5rem] pt-[7.125rem] lg:w-full">
            <img ref={$levitateItem} src={footerLevitate} className="absolute left-[36.25rem] top-[468px] w-[21.25rem] h-auto object-contain z-[0]" alt="" />

            <img src={footerBg} className="absolute bottom-0 left-0 w-full h-full object-cover z-[-1]" alt="" />
            <div className="flex justify-between">
                <div className="flex flex-[0.5_1_30%] lg:flex-[1_0_100%] lg:items-start flex-col gap-2">
                    <img src={darkLogo} alt="Right Property" className="w-[8.25rem] h-auto mb-[7.125rem]" width="72" height="18" />
                    <span className="font-geist text-14 font-normal leading-[24px] tracking-[0] text-[#8D98A5]" >
                        © {year} Right Property Ltd
                    </span>
                    <span className="font-geist text-[0.8rem] leading-[1.3em] font-normal  tracking-[0] text-[#8D98A5]" >
                        House 401, Highland, 165 The Broadway, London SW19 1NE, United Kingdom
                    </span>
                </div>
                <div className="flex flex-row-reverse gap-[3.75rem] mb-[5rem] lg:flex-wrap ">

                    {
                        footerItems.map((item) => (
                            <div key={item.label} className="">
                                <h4 className="mb-6 text-[#48515B] font-geist-mono text-16 font-medium leading-[122%] tracking-[0em] uppercase">{item.label}</h4>
                                <ul className="mb-[0.5rem] font-geist text-20 font-medium leading-[1.4em] tracking-[0%] text-[#48515B]">
                                    {
                                        item.items.map((item) => (
                                            <li key={item.label}><a target="_blank" id={item.type === "email" ? "email-link" : ""} onTouchStart={() => emailClickHandler(item)} onMouseDown={() => emailClickHandler(item)} rel="noopener" href={item.href}>{item.label}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }

                </div>
            </div>


        </div>
    </div>
}