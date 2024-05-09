interface PricingCardSmallProps {
    title: string;
    features: string[];
    price?: number;
}
export default function PricingCardSmall({ title, features, price }: PricingCardSmallProps) {
    return <div
        className="shadow-xl font-medium w-[21rem] h-[32.75rem] bg-white rounded-[32px] py-8 px-[1rem] flex flex-col items-center gap-8 mobile:w-[11.025rem] mobile:h-[12.80rem] mobile:mb-7 mobile:py-[1rem] mobile:px-[0.5rem] mobile:gap-[1.05rem] mobile:rounded-[16px]"
      
      >
        <div className="text-[1.6rem] -tracking-[0.04em] font-bold text-[#14141A] mobile:text-rpBlue leading-[1.95rem] text-center mobile:text-[0.84rem] mobile:leading-[1.21em]">
            {title}
        </div>
        <div className="w-full text-center text-[1rem] leading-[1.21875em]    border-b-[0.8px] border-t-[0.8px] border-[#D4D5D9] grow pt-8 mobile:text-[0.625rem] mobile:gap-[0.425rem] mobile:pt-4">
            <div className="flex flex-col gap-6 mobile:gap-[0.39375rem]">
                {features.map((feature, index) => {
                    return <div key={index}>
                        {feature}
                    </div>
                })}
            </div>
        </div>
        {price && <div >
            <span className="text-[2rem] leading-[2.43rem] mobile:text-[1rem] mobile:leading-[1.21em] mobile:text-rpBlue">
                <b>+</b> £ <b>{price}</b>
            </span>
            {" "}
            <span className="leading-[1.21875em] text-[1rem] mobile:text-[0.525rem]">
                / Month
            </span>
        </div>}
        {
            !price && <div className="text-[1.2rem] -tracking-[0.04em]  text-[#FF3F79] leading-[1.21em] text-center font-bold mobile:text-[0.6rem]">
                Get in touch<br />
                for  pricing
            </div>
        }
    </div>
}