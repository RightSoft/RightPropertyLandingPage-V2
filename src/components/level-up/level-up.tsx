import AnchorLink from "../anchor-link";
import ActionButton from "../buttons/action-button";

export default function LevelUp() {
    return <div className="relative h-[47.125rem] w-full">
        <video className="object-cover pl-[1.4375rem] pr-[0.9375rem] w-full h-full absolute z-10" src="/rp-landing-last.mp4" autoPlay muted loop ></video>
        <div className="pl-[1.4375rem] pr-[0.9375rem] w-full h-full absolute z-20 opacity-40">
            <div className="bg-black  w-full h-full">

            </div>
        </div>

        <div className="h-full w-full flex flex-col justify-end pl-[4.25rem] text-white  relative z-20">
            <h1 className="text-[3rem] leading-[3.6568rem] mb-3 font-bold">
                Level Up Your<br />
                Real Estate Marketing
            </h1>
            <p className="w-[44.76rem] text-[1.5rem] leading-[1.82875rem] ">
                <b>Right Property</b> is a <b>digital marketing suite</b> tailored for real estate developers. We offer tools to <b>create, manage, and display</b> your development on various devices to <b>enhance marketing and sales</b> efforts.
            </p>
            <br />
            <AnchorLink href='book-a-demo'>
                <ActionButton text={"BOOK A DEMO"} className={"mt-4 mb-[3.125rem]"} onClick={() => { }} />
            </AnchorLink>
        </div>
    </div>
} 