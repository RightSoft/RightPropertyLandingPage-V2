import { useActiveSectionContext } from "../context/section-context/section-context";
import AnchorLink from "./anchor-link";
import RpLogo from "./rp-logo";

export default function Header() {
    const { activeSection } = useActiveSectionContext();
    const textClass = (key: string) => {
        return activeSection == key ? 'font-bold text-[#5EC6D3]' : ''
    }
    return <div className="w-full h-[7.575rem] bg-[#F8F8F9] fixed z-50 drop-shadow-md">
        <div className="section flex justify-between pl-[5.625rem] pr-[1.6875rem] items-center h-full">
            <RpLogo />
            <ul className='flex items-center gap-[1.875rem] text-[1.25rem] leading-[1.52375rem] '>
                <li className={textClass('features')}>
                    <AnchorLink href='features'>Features</AnchorLink>
                </li>
                <li className={textClass('onboarding')}>
                    <AnchorLink href='onboarding'>Onboarding</AnchorLink>
                </li>
                <li className={textClass('book-a-demo')}>
                    <AnchorLink href='book-a-demo'>Book a Demo</AnchorLink>
                </li>
                <li className={textClass('pricing')}>
                    <AnchorLink href='pricing'>Pricing</AnchorLink>
                </li>
               
            </ul>
        </div>

    </div>
}