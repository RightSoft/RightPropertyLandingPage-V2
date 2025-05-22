import whiteLogo from "@/assets/white_rp_logo.png";
import { useRef, useState } from "react";
import type Lenis from "lenis";
import { useLenis } from 'lenis/react'
import { cn } from "@/lib/utils";

export default function Header() {
    const [hideHeader, setHideHeader] = useState(false);
    const $progress = useRef(0);
    const $prevProgress = useRef(0);
    const lenisHandler = (lenis: Lenis) => {
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
    useLenis(lenisHandler, []);
    const headerClass = cn('fixed top-0 left-0 right-0 z-50 bg-header-bg w-full h-[6.25rem] lg:h-[5rem] transition-all duration-[500ms] ease-out', hideHeader ? '-translate-y-full' : '');
    return (
        <div className={headerClass}>
            <div className="rp-container flex items-center justify-between px-[11.75rem] lg:px-[1.875rem] ">
                <img className="w-[6rem] h-auto lg:w-[4.25rem]" src={whiteLogo} alt="Right Property Logo" />
                {/* <NavigationItems /> */}
            </div>
        </div>
    )
}
