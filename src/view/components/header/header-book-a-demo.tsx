import ShowBookingHoc from "../show-booking-hoc";

export default function HeaderBookADemo() {
    return (
        <ShowBookingHoc>
            <button onClick={() => { }} className={'cursor-pointer w-[9.25rem] h-[3.125rem] border border-[#BADEF3] bg-[#BADEF342] font-geist font-semibold text-14 leading-[130%] tracking-[0%] uppercase rounded-[65px]'}>
                Book A DEMO
            </button>
        </ShowBookingHoc>
    )
}