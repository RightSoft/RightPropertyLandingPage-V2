interface PricingCardProps {
    title: string;
    features: string[];
    price: number;
}
export default function PricingCard({ title, features, price }: PricingCardProps) {
    return <div
        className="w-[28rem] h-[36.5rem] mobile:py-[1rem] mobile:px-[0.5rem] mobile:gap-[1rem] mobile:w-[16.5625rem] mobile:h-auto bg-white rounded-[32px] mobile:rounded-[16px] py-8 px-[1.7rem] flex flex-col items-center gap-8"
        style={{
            boxShadow: ' 0px 6.4px 16px 0px rgba(0, 0, 0, 0.15)'
        }}>
        <div className="mobile:text-[1.25rem] mobile:text-rpBlue leading-[1.21em] uppercase text-[1.6rem] font-bold text-[#14141A] text-center">
            {title}
        </div>
        <div className="mobile:text-12 mobile:px-8 mobile:font-medium mobile:gap-[0.425rem] mobile:pt-4 mobile:pb-2 w-full text-center text-[1rem] leading-[1.21875rem]   border-b-[0.8px] border-t-[0.8px] border-[#D4D5D9] grow pt-8">
            <div className="flex flex-col gap-6 mobile:gap-3">
                {features.map((feature, index) => {
                    return <div key={index}>
                        {feature}
                    </div>
                })}
            </div>
        </div>
        <div>
            <span className="mobile:text-rpBlue text-[2rem] leading-[2.43rem] mobile:text-[1.5rem] mobile:leading-[1.21em]">
                £ <b>{price}</b>
            </span>
            {" "}
            <span className="mobile:font-medium leading-[1.21875rem] text-[1rem] mobile:text-[0.9143rem]">
                / Month
            </span>

        </div>
    </div>
}