import AnchorLink from "../anchor-link";
import ActionButton from "../buttons/action-button";

export default function LevelUp() {
    return <div className="relative h-[47.125rem] mobile:h-[35.375rem]  w-full mobile:bg-[#EEEEF0] ">
        <div className="pl-[1.4375rem] pr-[0.9375rem] mobile:h-[13.6875rem] mobile:px-0 w-full h-full absolute mobile:relative">
            <video className="w-full h-full object-cover absolute z-10" src="/rp-landing-last.mp4" autoPlay muted loop ></video>
            <div className="w-full h-full absolute z-20 opacity-60">
                <div className="bg-[#1B1B1B]  w-full h-full"/>
            </div>
        </div>

        <div className="h-full mobile:h-auto w-full flex flex-col justify-end mobile:justify-start pl-[4.25rem] mobile:pl-2.5 mobile:py-10 text-white mobile:text-[#40424E]  relative z-20">
            <h1 className="text-[3rem] leading-[3.6568rem] mobile:text-[2.25rem] mobile:leading-[2.7425rem] mb-3 font-bold">
                Level Up Your<br />
                Real Estate Marketing
            </h1>
            <p className="w-[44.76rem] text-[1.5rem] leading-[1.82875rem] mobile:text-xs mobile:leading-[0.9143rem] mobile:w-[22.1875rem]">
                <b>Right Property</b> is a <b>digital marketing suite</b> tailored for real estate developers. We offer tools to <b>create, manage, and display</b> your development on various devices to <b>enhance marketing and sales</b> efforts.
            </p>
            <br />
            <AnchorLink href='book-a-demo'>
                <ActionButton text={"BOOK A DEMO"} className={"mt-4 mb-[3.125rem] mobile:mt-0"} onClick={() => { }} />
            </AnchorLink>
        </div>
    </div>
} 