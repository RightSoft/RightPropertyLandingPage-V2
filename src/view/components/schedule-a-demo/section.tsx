import BookADemoButton from "../book-a-demo-button";

export default function ScheduleADemoSection() {
    return <div className="bg-[#DDF3F8] py-[7.5rem] lg:py-[5rem] ">
        <div className="rp-container mx-auto w-[640px] lg:w-full lg:px-6">
            <div className="inline-block">
                <h3 className="mb-[0.625rem] font-geist text-base lg:text-14 font-normal leading-[150%] tracking-[0.04em] uppercase">
                    Let’s take a seat
                </h3>
                <h4 className="mb-10 font-general-sans text-80 lg:text-40 font-semibold leading-[100%] tracking-[0%]">
                    Schedule<br />a demo meeting
                </h4>
                <p className="mb-6 font-geist text-24 lg:text-18 font-normal leading-[140%] tracking-[0] w-[26.25rem] lg:w-full">
                    We’d be happy to meet and discuss how we can transform your business.
            </p>
                <BookADemoButton />
            </div>
        </div>

    </div>
}