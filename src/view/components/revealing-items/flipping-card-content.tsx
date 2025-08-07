import BookADemoButton from "../book-a-demo-button";
import LearnMoreButton from "./learn-more-button";


interface FlippingCardContentProps {
    subHeading: string;
    title: string;
    description: string;
    useBookButton?: boolean;
}
export default function FlippingCardContent({ subHeading, title, description, useBookButton = false }: FlippingCardContentProps) {
    return <div className="p-[3.75rem] bg-white w-[48.9375rem]">
        <div className="card-content">
            <p className="mb-8 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </p>
            <h2 className="mb-8 lg:mb-6 font-general-sans font-semibold text-40 lg:text-40 tracking-[0em] leading-[130%] text-squid-ink">
                {title}
            </h2>
            <p className="mb-[2.5rem] font-geist font-normal text-32 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink">
                {description}
            </p>
            <div className="lg:hidden">
                {useBookButton && <BookADemoButton />}
                {!useBookButton && <LearnMoreButton />}
            </div>
        </div>

    </div>
}