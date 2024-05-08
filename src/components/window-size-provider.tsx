import { useEffect } from "react";
import useWindowSize from "../hooks/use-window-size";

export default function WindowSizeProvider() {
    const { width, height } = useWindowSize();

    useEffect(() => {
        document.documentElement.style.setProperty('--window-width', width.toString());
        document.documentElement.style.setProperty('--window-height', height.toString());
    }, [width, height]);
    return null;
}