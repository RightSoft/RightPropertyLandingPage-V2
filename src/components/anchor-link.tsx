interface AnchorLinkProps {
    href: string;
    children: React.ReactNode;
    className ?: string;
}
export default function AnchorLink({ href, children }: AnchorLinkProps) {
    return <a
        href={`#${href}`}
        onClick={e => {
            const section = document.getElementById(href);
            e.preventDefault();
            if (section === null) return;
            var elementPosition = section.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - 134;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }}
    >
        {children}
    </a>
}