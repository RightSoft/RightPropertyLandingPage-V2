import useWindowSize from "../hooks/use-window-size";

interface AnchorLinkProps {
    href: string;
    children: React.ReactNode;
    className ?: string;
}
export default function AnchorLink({ href, children }: AnchorLinkProps) {
    const {width} = useWindowSize();

    const offset = width > 800 ? 121 : 55; 
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