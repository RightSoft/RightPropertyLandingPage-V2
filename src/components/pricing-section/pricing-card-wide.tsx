export default function PricingCardWide() {
    return <div
        className="w-[28rem] h-[36.5rem] mobile:w-[14rem] mobile:h-[18.25rem] mobile:rounded-[16px] bg-white rounded-[32px] py-8 px-[1.7rem] mobile:py-[1rem] mobile:px-[0.85rem] flex flex-col items-center gap-[0.6rem] mobile:gap-[0.3rem]"
        style={{
            boxShadow: ' 0px 6.4px 16px 0px rgba(0, 0, 0, 0.15)'
        }}>
        <div className="text-[1.6rem] font-medium leading-[1.95rem] text-center mobile:text-[0.8rem] mobile:leading-[1.21em]">
            BASE FEATURES
        </div>
        <div className="text-center text-[1rem] leading-[1.21875rem]  mobile:text-8   border-b-[0.8px] border-t-[0.8px] border-[#D4D5D9] grow pt-8 flex gap-[0.85rem] mobile:gap-[0.425rem] mobile:pt-4">
            <div className="flex basis-[100%] flex-col gap-6  mobile:gap-3">
                <div>
                    Availability Lists
                </div>
                <div>
                    Interactive 2d Siteplan
                </div>
                <div>
                    Local Area Views
                </div>
                <div>
                    Media Capabilities
                </div>
                <div>
                    Theme Management
                </div>
            </div>
            <div className="flex basis-[100%] flex-col gap-6 mobile:gap-3">
                <div>
                    Plot Listing / Details
                </div>
                <div>
                    Favourites
                </div>
                <div>
                    Admin Portal
                </div>
                <div>
                    Standard User Roles
                </div>
                <div>
                    Asset Management
                    Portal
                </div>
            </div>
        </div>
        <div className="text-[1.6rem] leading-[1.95rem] mobile:text-[0.8rem] mobile:leading-[1.21em]">
            <b>ONE TIME</b> SETUP FEE
        </div>
        <div className="">
            <span className="text-[2rem] leading-[2.43rem] mobile:text-[1rem] mobile:leading-[1.21em]">
                £ <b>15</b>
            </span>
            {" "}
            <span className="leading-[1.21875rem] text-[1rem] mobile:text-8">
                / Plot
            </span>

        </div>
    </div>
}