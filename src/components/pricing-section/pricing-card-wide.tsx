export default function PricingCardWide() {
    return <div
        className="w-[28rem] h-[36.5rem] bg-white rounded-[32px] py-8 px-[1.7rem] flex flex-col items-center gap-[0.6rem]"
        style={{
            boxShadow: ' 0px 6.4px 16px 0px rgba(0, 0, 0, 0.15)'
        }}>
        <div className="text-[1.6rem] font-medium leading-[1.95rem] text-center">
            BASE FEATURES
        </div>
        <div className="text-center text-[1rem] leading-[1.21875rem]   border-b-[0.8px] border-t-[0.8px] border-[#D4D5D9] grow pt-8 flex gap-[0.85rem]">
            <div className="flex basis-[100%] flex-col gap-6">
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
            <div className="flex basis-[100%] flex-col gap-6">
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
        <div className="text-[1.6rem] leading-[1.95rem] ">
            <b>ONE TIME</b> SETUP FEE
        </div>
        <div>
            <span className="text-[2rem] leading-[2.43rem]">
                £ <b>15</b>
            </span>
            <span className="leading-[1.21875rem] text-[1rem]">
                / Plot
            </span>

        </div>
    </div>
}