import { ReactElement, createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext<{
    activeSection: string,
    updateActiveSection: (section: string) => void
}>({
    activeSection: "",
    updateActiveSection: () => { }
});

export const useActiveSectionContext = () => useContext(ActiveSectionContext);

export default function ActiveSectionProvider({ children }: { children: ReactElement }) {
    const [activeSection, setActiveSection] = useState("");

    return <ActiveSectionContext.Provider value={{ activeSection, updateActiveSection: setActiveSection }}>
        {children}
    </ActiveSectionContext.Provider>
}