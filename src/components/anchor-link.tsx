import { useEffect, useState } from "react";
import useWindowSize from "../hooks/use-window-size";

interface AnchorLinkProps {
    href: string;
    children: React.ReactNode;
    className ?: string;
}
export default function AnchorLink({ href, children }: AnchorLinkProps) {
    const [fontSize, setFontSize] = useState<number>(0);
    const {width} = useWindowSize();

    useEffect(() => {
        setFontSize(document.documentElement.style.fontSize ? parseInt(document.documentElement.style.fontSize) : 16);
    },[]) 
    const offset = width > 800 ? 6 * fontSize : 3.4375 * fontSize;

    return <a
        href={`#${href}`}
        onClick={e => {
            const section = document.getElementById(href);
            e.preventDefault();
            if (section === null) return;
            var elementPosition = section.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }}
    >
        {children}
    </a>
}