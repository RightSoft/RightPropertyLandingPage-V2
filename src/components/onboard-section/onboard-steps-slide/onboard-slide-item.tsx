import { OnboardStep } from "../../../domain/onboard-step";

export default function OnboardSlideItem({ onboardStep }: { onboardStep: OnboardStep }) {
    return <div
        className="text-center w-[8.75rem] flex flex-col gap-[1rem] items-center">
        <div className="h-[8rem] ">
            <div className="text-[#64BCC7] mb-[0.4375rem]">
                <span className="font-bold text-[1.44rem] leading-[1.2191em]">{`${onboardStep.index}.`}</span> <br />
                <span className="text-[0.96rem] leading-[1.2191em] -tracking-[0.04em]">{onboardStep.title}</span>
            </div>
            <div className="text-[0.64rem] leading-[1.2191em] text-[#282936]">
                {onboardStep.description}
            </div>
        </div>
        <div className="relative">
            {onboardStep.icon}
            {onboardStep.index < 3 && <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[125%]">
                <svg width="72" height="14" viewBox="0 0 72 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.4225 8.75297C67.7425 10.4874 64.4657 12.0362 61.1953 13.585C61.0353 13.3546 60.8689 13.1178 60.7089 12.8874C62.1681 11.761 63.6273 10.641 65.0929 9.51457C65.0481 9.23937 64.9969 8.96417 64.9521 8.68897H0.619298C0.619298 8.37537 0.606498 8.06177 0.600098 7.74817C21.7201 4.56737 42.9873 6.16737 64.8817 6.69217C63.0257 4.47137 61.4769 2.60897 59.9281 0.752967C60.0689 0.599367 60.2033 0.439367 60.3441 0.285767C63.8577 2.96737 67.3649 5.65537 71.4289 8.75937L71.4225 8.75297Z" fill="#5EC6D3" />
                </svg>
            </div>}
        </div>

    </div>
}