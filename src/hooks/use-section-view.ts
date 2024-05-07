import { useEffect } from "react";
import { useActiveSectionContext } from "../context/section-context/section-context";

export default function useSectionView({ inView, key }: { inView: boolean, key: string }) {
    const { updateActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) updateActiveSection(key);
    }, [inView, key])
}