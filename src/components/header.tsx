import RpLogo from "./rp-logo";

export default function Header() {
    return <div className="w-full h-[8.375rem] bg-[#F8F8F9] ">
        <div className="section flex justify-between pl-[5.625rem] pr-[1.6875rem] items-center h-full">
            <RpLogo />
            <ul className='flex items-center gap-[1.875rem] text-[1.25rem] leading-[1.52375rem] '>
                <li>
                    <a href='#'>Features</a>
                </li>
                <li>
                    <a href='#'>Onboarding</a>
                </li>
                <li>
                    <a href='#'>Pricing</a>
                </li>
                <li>
                    <a href='#'>Book a Demo</a>
                </li>
            </ul>
        </div>

    </div>
}