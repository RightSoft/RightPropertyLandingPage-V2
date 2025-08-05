import HeaderBookADemo from "./header-book-a-demo"

export default function NavigationItems() {
    return (
        <div className="lg:hidden flex items-center gap-6">
            <NavigationItem>Experiences</NavigationItem>
            <NavigationItem>Why Right Property?</NavigationItem>
            <NavigationItem>FAQs</NavigationItem>
            <HeaderBookADemo />
        </div>
    )
}

const NavigationItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="font-geist font-medium text-base leading-6 tracking-0 text-[#232323] cursor-pointer">
            {children}
        </div>
    )
}


