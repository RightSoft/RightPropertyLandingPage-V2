
export default function LevelUp() {
    return <div className="relative h-[47.125rem] mobile:h-[auto]  w-full pt-[1.875rem] mobile:pt-0 "
        
    >
        <div className="px-[1.203125rem] mobile:h-[13.6875rem] mobile:px-0 w-full h-full absolute mobile:relative">
            <video style={{ padding: 'inherit' }} className="w-full left-0 h-full object-cover absolute z-10 " src="/rp-landing-last.mp4" autoPlay muted playsInline loop ></video>
            <div style={{ padding: 'inherit' }} className="w-full left-0 h-full absolute z-20">
                <div className=" w-full h-full"
                    style={{
                        background: "linear-gradient(74.46deg, rgba(25, 25, 25, 0.5) 19.09%, rgba(0, 0, 0, 0) 79.82%)"
                    }}
                />
            </div>
        </div>

        <div className="h-full mobile:h-auto w-full flex flex-col justify-end mobile:justify-start pl-[4.25rem] mobile:pl-2.5 mobile:pt-10 text-white mobile:text-[#40424E]  relative z-20 level-up-gradient"
       
        
        >
            <h1 className="text-[3rem] leading-[3.6568rem] mobile:text-[2.25rem] mobile:leading-[2.7425rem] mb-3 font-bold">
                Level Up Your<br />
                Real Estate Marketing
            </h1>
            <p className="w-[44.76rem] text-[1.5rem] leading-[1.82875rem] pb-[3.125rem] mobile:pb-[0] mobile:text-xs mobile:leading-[0.9143rem] mobile:w-full ">
                <b>Right Property</b> is a <b>digital marketing suite</b> tailored for real estate developers. We offer tools to <b>create, manage, and display</b> your development on various devices to <b>enhance marketing and sales</b> efforts.
            </p>
        </div>
    </div>
} 