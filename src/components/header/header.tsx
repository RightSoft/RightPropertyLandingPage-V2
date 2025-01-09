import { AnimatePresence, m } from "framer-motion";
import { useActiveSectionContext } from "../../context/section-context/section-context";
import AnchorLink from "../anchor-link";
import RpLogo from "../rp-logo";
import { useEffect, useRef, useState } from "react";
import Hamburger from "./hamburger";
import HeaderMenu from "./header-menu";
import { useLenis } from '@studio-freight/react-lenis'
import Lenis from '@studio-freight/lenis';
import useWindowSize from "../../hooks/use-window-size";
import useOnlyHome from "../../hooks/use-only-home";
import { useDictionary } from "../../hooks/use-dictionary";
import { useAutoAnchorScroll } from "../../hooks/use-auto-anchor-scroll";

export default function Header({isUseAnchorLinks} : {isUseAnchorLinks: boolean}) {
    const bookDemoText = useDictionary('book-a-demo');
    const isHome = useOnlyHome();
    const [hideHeader, setHideHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const { activeSection } = useActiveSectionContext();
    const textClass = (key: string) => {
        return activeSection == key ? 'font-bold text-[#5EC6D3]' : ''
    }
    const {width} = useWindowSize();
    const $progress = useRef(0);
    const $prevProgress = useRef(0);
    const lenisHandler = (lenis: Lenis) => {
        if(width < 768) return;
        $progress.current = lenis.progress;
        if ($progress.current >= 0.01) {
            if (($prevProgress.current ?? 0) < $progress.current) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        }
        $prevProgress.current = $progress.current;
    }
    useLenis(lenisHandler,[width]);

    useEffect(() => {
        if (showMenu) document.body.classList.add('stop-scrolling')
        else document.body.classList.remove('stop-scrolling')
    }, [showMenu])
    useAutoAnchorScroll();

    const shadow = showMenu ? '' : 'drop-shadow-md'
    const transition = {
        duration: 0.5,
        ease: "easeOut",
    }
    return <>
        <m.div
            variants={{
                hidden: { y: "-100%", transition: transition },
                visible: { y: 0, transition: transition }
            }}
            animate={hideHeader ? 'hidden' : 'visible'}
            className={`w-full h-[7.51rem] mobile:h-[3.4375rem] bg-white  fixed mobile:fixed z-50 ${shadow}`}>
            <div className="section flex justify-between mobile:px-5 pl-[5.625rem] pr-[1.6875rem] items-center h-full">
                <RpLogo className="w-[6.875rem] mobile:w-[3.31rem]" />
                <div className="hidden mobile:block">
                    <Hamburger isMenuShown={showMenu} toggleMenu={toggleMenu} />
                </div>
               {isUseAnchorLinks &&  <ul className='mobile:hidden flex items-center gap-[1.875rem] text-[1.25rem] leading-[1.52375rem] '>
                    <li className={textClass('features')}>
                        <AnchorLink href='features'>Features</AnchorLink>
                    </li>
                    {isHome && <li className={textClass('onboarding')}>
                        <AnchorLink href='onboarding'>Onboarding</AnchorLink>
                    </li>}
                    <li className={textClass('book-a-demo')}>
                        <AnchorLink href='book-a-demo'>{bookDemoText}</AnchorLink>
                    </li>
                    {/* <li className={textClass('pricing')}>
                        <AnchorLink href='pricing'>Pricing</AnchorLink>
                    </li> */}
                </ul>}
            </div>
        </m.div>
        <AnimatePresence>
            {showMenu && <m.div
                className="fixed h-full w-full z-40"
                initial={{ opacity: 0.5, x: '-100%' }}
                exit={{ opacity: 0.5, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", }}
            >
                <HeaderMenu toggleMenu={toggleMenu} isUseAnchorLinks={isUseAnchorLinks} />
            </m.div>}
        </AnimatePresence>
    </>
}