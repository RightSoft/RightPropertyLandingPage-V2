interface PricingCardProps {
    title: string;
    features: string[];
    price: number;
}
export default function PricingCard({ title, features, price }: PricingCardProps) {
    return <div
        className="w-[28rem] h-[36.5rem] bg-white rounded-[32px] py-8 px-[1.7rem] flex flex-col items-center gap-8"
        style={{
            boxShadow: ' 0px 6.4px 16px 0px rgba(0, 0, 0, 0.15)'
        }}>
        <div className="uppercase text-[1.6rem] font-bold text-[#14141A] leading-[1.95rem] text-center">
            {title}
        </div>
        <div className="w-full text-center text-[1rem] leading-[1.21875rem]   border-b-[0.8px] border-t-[0.8px] border-[#D4D5D9] grow pt-8">
            <div className="flex flex-col gap-6">
                {features.map((feature, index) => {
                    return <div key={index}>
                        {feature}
                    </div>
                })}
            </div>
        </div>
        <div>
            <span className="text-[2rem] leading-[2.43rem]">
                £ <b>{price}</b>
            </span>
            {" "}
            <span className="leading-[1.21875rem] text-[1rem]">
                / Month
            </span>

        </div>
    </div>
}