import Button from "@/view/components/button";
import ShowBookingHoc from "./show-booking-hoc";
import BookADemoButton from '@/view/components/book-a-demo-button'


export const AccessibilityRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-4">
            {children}
        </div>
    )
}

export const AccessibilityHeaderInformation = ({ subHeading, title, description }: { subHeading: string, title: string, description: string }) => {
    return (
        <>
            <p className="mb-4 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </p>
            <h2 className="mb-[2.5rem] lg:mb-6 font-general-sans font-semibold text-64 lg:text-40 tracking-[0em] leading-[100%] text-squid-ink">
                {title}
            </h2>
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
                    <h3 className="mb-1 font-geist font-medium text-18 leading-[140%] text-squid-ink">
                        {item.title}
                    </h3>
                    <p className="font-geist font-normal text-16 leading-[140%] text-squid-ink">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
}

export default function Accessibility({ subHeading, title, description, items }: { subHeading: string, title: string, description: string, items: { icon: React.ReactNode, title: string, description: string }[] }) {
    const itemColors = ['#E4D6F6', '#FAD9BF'];
    return (
        <div className="bg-white p-[3.35rem] lg:p-[1.5rem]">
            <p className="mb-8 font-geist-mono font-normal text-16 lg:text-14 lg:mb-4 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </p>
            <h2 className="mb-8 font-general-sans font-semibold text-40 lg:mb-[1.5rem] lg:text-32 tracking-[0em] leading-[130%] text-squid-ink">
                {title}
            </h2>
            <p className="mb-[2.5rem] font-geist font-normal text-32 lg:mb-[2rem] lg:text-24 tracking-[0em] leading-[140%] text-squid-ink">
                {description}
            </p>
            <div className="">
                <BookADemoButton />
            </div>
            <div className="mb-[3.75rem] lg:mb-[2rem]">
            </div>
            <div className="flex flex-col gap-12  lg:w-full">
                {items.map((item, index) => (
                    <div className="flex flex-col gap-[2.5rem] p-[2.5rem] lg:p-[1.5rem] lg:gap-[1.5rem] items-start rounded-[20px]" style={{ border: `1px solid ${itemColors[index]}` }}>
                        <div className="flex items-center gap-8 lg:flex-col lg:gap-4 lg:items-start">
                            {item.icon}

                            <h3 className="mb-1 font-geist font-medium lg:mb-0 text-28 lg:text-20 -tracking-[0.02em] leading-[140%] text-squid-ink">
                                {item.title}
                            </h3>
                        </div>
                        <p className="font-geist font-normal text-24 lg:text-base -tracking-[0.01em] leading-[140%] text-squid-ink pr-[1.6rem]">
                            {item.description}
                        </p>

                    </div>
                ))}
            </div>
           
        </div>
    )
}