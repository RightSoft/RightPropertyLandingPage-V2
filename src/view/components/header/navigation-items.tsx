export default function NavigationItems() {
    return (
        <div className="lg:hidden flex items-center gap-6">
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Solutions</NavigationItem>
            <NavigationItem>Pricing</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
        </div>
    )
}

const NavigationItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="font-geist font-medium text-base leading-6 tracking-0 text-white cursor-pointer">
            {children}
        </div>
    )
}


