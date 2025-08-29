import { useEffect, useState } from "react";
import { useWindowSize } from "hamo";
import { useLenis } from "lenis/react";

interface AnchorLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function AnchorLink({ href, children }: AnchorLinkProps) {
    const [fontSize, setFontSize] = useState<number>(0);
    const { width } = useWindowSize();
    const lenis = useLenis();

    useEffect(() => {
        setFontSize(document.documentElement.style.fontSize ? parseInt(document.documentElement.style.fontSize) : 16);
    }, [])
    
    const offset = (width ?? 0) > 800 ? 6 * fontSize : 3.4375 * fontSize;

    return <a
        href={`#${href}`}
        onClick={e => {
            e.preventDefault();
            const section = document.getElementById(href);
            if (!section || !lenis) return;
            
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            
            lenis.scrollTo(offsetPosition, {
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        }}
    >
        {children}
    </a>
}