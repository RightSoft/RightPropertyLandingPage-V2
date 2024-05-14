import { useEffect, useRef, useState } from "react";

export default function useLoopToN(size:number,wait:number) : [number, typeof setManualIndex]{
    const [activeIndex, setActiveIndex] = useState(0)
    const [manualIndex, setManualIndex] = useState(0)
    const $started_at = useRef<number>(Date.now());
    let timerId: number;
    const timerHandler = () => {
        let now = Date.now();
        if (now - $started_at.current > wait) {
            increaseIndex();
            $started_at.current = now;
        }
        timerId = window.requestAnimationFrame(timerHandler);
    }
    const increaseIndex = () => {
        setActiveIndex((prevIndex) => {
            let tmpIndex = prevIndex;
            tmpIndex++;
            if (tmpIndex >= (size)) {
                tmpIndex = 0;
            }
            return tmpIndex;
        })
    }
    const resetTimer = () => {
        cancelAnimationFrame(timerId);
        $started_at.current = Date.now();
        timerId = window.requestAnimationFrame(timerHandler);
    }
    useEffect(() => {
        timerHandler();
        return () => cancelAnimationFrame(timerId);
    }, [])
    useEffect(() => {
        resetTimer();
        setActiveIndex(manualIndex);
    },[manualIndex])
    return [activeIndex,setManualIndex];
}