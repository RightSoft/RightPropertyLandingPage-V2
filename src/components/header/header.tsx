import { AnimatePresence, motion } from "framer-motion";
import { useActiveSectionContext } from "../../context/section-context/section-context";
import AnchorLink from "../anchor-link";
import RpWhiteLogo from "../icons/rp-white-logo";
import RpLogo from "../rp-logo";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import HeaderMenu from "./header-menu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const { activeSection } = useActiveSectionContext();
    const textClass = (key: string) => {
        return activeSection == key ? 'font-bold text-[#5EC6D3]' : ''
    }
    useEffect(() => {
        if (showMenu) document.body.classList.add('stop-scrolling')
        else document.body.classList.remove('stop-scrolling')
    }, [showMenu])
    const shadow = showMenu ? '' : 'drop-shadow-md'
    return <>
        <div className={`w-full h-[7.51rem] mobile:h-[3.4375rem] bg-white  fixed z-50 ${shadow}`}>
            <div className="section flex justify-between mobile:px-5 pl-[5.625rem] pr-[1.6875rem] items-center h-full">
                <div className="mobile:hidden">
                    <RpLogo className="w-[6.875rem]" />
                </div>
                <div className="hidden mobile:block ">
                    <RpLogo className="w-[3.31rem]" />
                </div>
                <div className="hidden mobile:block">
                    <Hamburger isMenuShown={showMenu} toggleMenu={toggleMenu} />
                </div>
                <ul className='mobile:hidden flex items-center gap-[1.875rem] text-[1.25rem] leading-[1.52375rem] '>
                    <li className={textClass('features')}>
                        <AnchorLink href='features'>Features</AnchorLink>
                    </li>
                    <li className={textClass('onboarding')}>
                        <AnchorLink href='onboarding'>Onboarding</AnchorLink>
                    </li>
                    <li className={textClass('book-a-demo')}>
                        <AnchorLink href='book-a-demo'>Book a Demo</AnchorLink>
                    </li>
                    {/* <li className={textClass('pricing')}>
                        <AnchorLink href='pricing'>Pricing</AnchorLink>
                    </li> */}
                </ul>
            </div>
        </div>
        <AnimatePresence>
            {showMenu && <motion.div
                className="fixed h-full w-full z-40"
                initial={{ opacity: 0.5, x: '-100%' }}
                exit={{ opacity: 0.5, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", }}
            >
                <HeaderMenu toggleMenu={toggleMenu} />
            </motion.div>}
        </AnimatePresence>
    </>
}