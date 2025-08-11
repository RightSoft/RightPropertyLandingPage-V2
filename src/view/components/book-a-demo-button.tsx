
import ShowBookingHoc from "./show-booking-hoc";

export default function BookADemoButton({  }: { className?: string }) {

    return (
        <ShowBookingHoc>
            <button onClick={() => { }} className={'text-left pl-[2.25rem] w-[14.5625rem] h-[4rem] rounded-[65px] bg-[#FF9985] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase relative'}>
                Book a demo
                <div className="w-[3.5rem] h-[3.375rem] absolute bg-[#EF716E] rounded-full flex items-center justify-center top-[5px] right-[5px]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.5H19" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5.5L19 12.5L12 19.5" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </button>
        </ShowBookingHoc>
    )
}