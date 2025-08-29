import AnchorLink from "../anchor-link"
import HeaderBookADemo from "./header-book-a-demo"

export default function NavigationItems() {
    return (
        <div className="lg:hidden flex items-center gap-6">
            <NavigationItem href="experiences">Experiences</NavigationItem>
            <NavigationItem href="why-right-property">Why Right Property?</NavigationItem>
            <NavigationItem href="faqs">FAQs</NavigationItem>
            <HeaderBookADemo />
        </div>
    )
}

const NavigationItem = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <AnchorLink href={href}>
            <div className="font-geist font-medium text-base leading-6 tracking-0 text-[#232323] cursor-pointer">
                {children}
            </div>
        </AnchorLink>
    )
}


