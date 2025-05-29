import darkLogo from "@/assets/dark_logo.png"
export default function FooterSection() {
    const year = new Date().getFullYear()
    const footerItems = [
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
                    href: "/"
                },
            ]
        }
    ]
    return <div className="rp-container py-16 lg:py-[2.5rem] lg:px-6">
        <div className="w-[640px] mx-auto lg:w-full">
            <div className="flex gap-6 mb-[2.5rem] lg:flex-wrap">
                {
                    footerItems.map((item) => (
                        <div key={item.label} className="flex-[1_1_auto] lg:flex-[1_0_30%]">
                            <h4 className="mb-3 text-[#48515B] font-geist text-14 font-semibold leading-[150%] tracking-[0.04em] uppercase">{item.label}</h4>
                            <ul className="mb-1 font-geist text-14 font-normal leading-[1.7em] tracking-[0%] text-[#48515B]">
                                {
                                    item.items.map((item) => (
                                        <li key={item.label}><a target="_blank" href={item.href}>{item.label}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className="flex lg:items-center">
                <img src={darkLogo} alt="Right Property" className="w-[4.5rem] h-auto mr-4" />
                <span className="font-geist text-14 font-normal leading-[24px] tracking-[0] text-[#8D98A5]" >
                    © {year} Right Property Ltd
                </span>
            </div>
        </div>
    </div>
}