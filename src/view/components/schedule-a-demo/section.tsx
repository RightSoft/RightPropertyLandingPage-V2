import BookADemoButton from "../book-a-demo-button";
import representive from "@/assets/v3/representive.png";
export default function ScheduleADemoSection() {
    return <section className="relative h-[100vh] flex items-center justify-center py-[7.5rem] lg:py-[5rem]" aria-label="Schedule a demo meeting with Right Property team">
        <div className="relative w-[1011px] overflow-hidden bg-white p-[3.75rem] lg:w-full lg:px-6" style={{boxShadow: '3px 32px 58.5px rgba(134, 101, 177, 0.1)'}}>
            <div className="inline-block">
                <p className="mb-8 font-geist text-base lg:text-14 font-medium leading-[150%] tracking-[0.02em] uppercase">
                    Let's take a seat
                </p>
                <h3 className="mb-8 font-general-sans text-40 lg:text-40 font-semibold leading-[130%] tracking-[0.01em]">
                    Schedule a demo meeting
                </h3>
                <p className="mb-[3.125rem] font-geist text-32 lg:text-18 font-normal leading-[140%] tracking-[0] w-[37.5rem] lg:w-full">
                    We'd be happy to meet and discuss how we can transform your business.
            </p>
                <BookADemoButton />
            </div>
            <img src={representive} alt="Representative" className="absolute top-[2.3125rem] -right-[1rem] w-[18.625rem] object-contain h-auto" />
            
        </div>
        <div className="absolute w-[121rem] h-[88rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" style={{background: 'radial-gradient(50% 50% at 50% 50%, #E7DFF2 0%, rgba(255, 255, 255, 0) 100%)'}}>

</div>
    </section>
}