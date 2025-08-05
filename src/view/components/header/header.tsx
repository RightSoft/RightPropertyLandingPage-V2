import darkLogo from "@/assets/dark_logo.webp";
import { useRef, useState } from "react";
import type Lenis from "lenis";
import { useLenis } from 'lenis/react'
import { cn } from "@/lib/utils";
import BuiltForDevelopers from "./built-for-developers";
import NavigationItems from "./navigation-items";

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
    const headerClass = cn('fixed top-0 left-0 z-50 bg-transparent w-full h-[6.25rem] lg:h-[5rem] transition-all duration-[500ms] ease-out', hideHeader ? '-translate-y-full' : '');
    return (
        <div className={headerClass}>
            <div className="rp-container flex items-center justify-between pl-[5.875rem]  pr-[5.1875rem] lg:px-6">
                <div className="flex items-center gap-[5.52rem]">
                    <img className="w-[6rem] h-auto lg:w-[4.25rem]" src={darkLogo} alt="Right Property Logo" width="96" height="24" />
                    <BuiltForDevelopers />
                </div>
                <NavigationItems />
            </div>
        </div>
    )
}
