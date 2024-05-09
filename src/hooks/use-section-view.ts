import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "../context/section-context/section-context";
import { callEvent } from "../lib/utils";

export default function useSectionView({ inView, key }: { inView: boolean, key: string }) {
    const { updateActiveSection } = useActiveSectionContext();
    const eventSentRef = useRef<boolean>(false);

    useEffect(() => {
        if (!inView || eventSentRef.current) return;
        eventSentRef.current = true;
        callEvent('section_view', key);
    }, [inView])
    useEffect(() => {
        if (inView) updateActiveSection(key);
    }, [inView, key])
}