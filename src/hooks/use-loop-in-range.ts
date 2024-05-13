import { useEffect, useRef, useState } from "react";

export default function useLoopInRange(size:number,wait:number){
    const [activeIndex, setActiveIndex] = useState(0)
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

    useEffect(() => {
        timerHandler();
        return () => cancelAnimationFrame(timerId);
    }, [])
    
    return activeIndex;
}