import Button from "@/view/components/button";
import ShowBookingHoc from "./show-booking-hoc";


export const AccessibilityRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-6">
            {children}
        </div>
    )
}

export const AccessibilityHeaderInformation = ({ subHeading, title, description }: { subHeading: string, title: string, description: string }) => {
    return (
        <>
            <h3 className="mb-4 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </h3>
            <h4 className="mb-[2.5rem] lg:mb-6 font-general-sans font-semibold text-64 lg:text-40 tracking-[0em] leading-[100%] text-squid-ink">
                {title}
            </h4>
            <p className="mb-6 font-geist font-normal text-20 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink">
                {description}
            </p>
        </>
    )
}

export const AccessibilityButton = ({ className }: { className?: string }) => {
    return (
        <ShowBookingHoc>
            <div className={`${className}`}>
                <Button label="Book a Demo" variant="primaryLight" />
            </div>
        </ShowBookingHoc>
    )
}

export const AccessibilityItems = ({ items }: { items: { icon: React.ReactNode, title: string, description: string }[] }) => {
    return <div className="flex flex-col gap-12 w-[26.25rem] lg:w-full">
        {items.map((item) => (
            <div className="flex lg:flex-col gap-8 lg:gap-3 items-start">
                {item.icon}
                <div className="">
                    <h4 className="mb-1 font-geist font-medium text-18 leading-[140%] text-squid-ink">
                        {item.title}
                    </h4>
                    <p className="font-geist font-normal text-16 leading-[140%] text-squid-ink">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
}

export default function Accessibility({ subHeading, title, description, items }: { subHeading: string, title: string, description: string, items: { icon: React.ReactNode, title: string, description: string }[] }) {
    return (
        <div className="lg:px-6">
            <h2 className="mb-4 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </h2>
            <h3 className="mb-[2.5rem] lg:mb-6 font-general-sans font-semibold text-64 lg:text-40 tracking-[0em] leading-[100%] text-squid-ink">
                {title}
            </h3>
            <p className="mb-6 font-geist font-normal text-20 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink">
                {description}
            </p>
            <div className="lg:hidden">
                <ShowBookingHoc>
                    <Button label="Book a Demo" variant="primaryLight" />
                </ShowBookingHoc>
            </div>
            <div className="mb-[6rem] lg:mb-[2.25rem]">
            </div>
            <div className="flex flex-col gap-12 w-[26.25rem] lg:w-full">
                {items.map((item) => (
                    <div className="flex lg:flex-col gap-8 lg:gap-3 items-start">
                        {item.icon}
                        <div className="">
                            <h4 className="mb-1 font-geist font-medium text-18 leading-[140%] text-squid-ink">
                                {item.title}
                            </h4>
                            <p className="font-geist font-normal text-16 leading-[140%] text-squid-ink">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden lg:block lg:mt-[2.25rem] ">
                <ShowBookingHoc>
                    <Button label="Book a Demo" variant="primaryLight" className="lg:w-full" />
                </ShowBookingHoc>
            </div>
        </div>
    )
}