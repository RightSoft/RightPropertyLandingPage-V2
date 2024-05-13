import { useState, useRef, useEffect } from 'react';
import './Carousel.css';
import useWindowSize from '../hooks/use-window-size';
import {  motion, useMotionValue, useMotionValueEvent, useSpring, useWillChange } from 'framer-motion';

interface CarouselProps {
    cards: React.ReactNode[];
    speed: number;
}
const CustomCarousel = ({ cards, speed }: CarouselProps) => {
    const [slideCards, _] = useState<React.ReactNode[]>(cards);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<Partial<Touch>>();
    const carouselRef = useRef(null);
    const { width } = useWindowSize();
    const cardWidth = width <= 800 ? width : 375;

    const transitionDuration = isDragging ? 0 : 3;
    const positionx = useMotionValue(0);
    const position = useSpring(positionx, { mass: 0.5, stiffness: 50, damping: 15});
    const $lastXDelta = useRef<number>(0);
    const releaseId = useRef<number | null>(null);
    const $started_at = useRef<number>(Date.now());
    const carouselWidth = cardWidth * cards.length;
    const willChange = useWillChange();
    const $prevPosition = useRef<number>(0);
    let timerId: number;
    useEffect(() => {
        position.jump( cardWidth * -2);
    },[cardWidth]);
    const timerHandler = () => {
        let now = Date.now();
        if (now - $started_at.current > speed) {
            updatePosition(isDragging);
            $started_at.current = now;
        }
        timerId = window.requestAnimationFrame(timerHandler);
    }
    const updatePosition = (isDragging: boolean) => {
        if (!isDragging) {
            const prevPosition = position.get();
            position.set(prevPosition - 15);
        }
    }
    useEffect(() => {
        if (!isDragging && cardWidth > 0) timerHandler();
        return () => cancelAnimationFrame(timerId);
    }, [isDragging,cardWidth])

    useMotionValueEvent(position, "change", (latest: number) => {
        const direction = latest - $prevPosition.current;
        const jumpPoint = cardWidth * (cards.length - 1)
        if (direction < 0 && (Math.round(latest) == Math.round(-(jumpPoint)))) {
            negativeArrange(latest + jumpPoint);
        }
        
        else if(direction > 0 && (Math.round(latest) == 0)){
            positiveArrange(latest + -Math.round(0));
        }
        $prevPosition.current = latest;
    })


    const negativeArrange = (offset:number) => {
        console.log('negativeArrange');
        position.jump((-cardWidth*1)+offset);
    }
    const positiveArrange = (offset:number) => {
        console.log('positiveArrenge');

        position.jump((-cardWidth * (slideCards.length-2))-offset);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (releaseId.current) {
            clearTimeout(releaseId.current);
            releaseId.current = null;
        }
        setIsDragging(true);
        setDragStart(e.touches[0]);
    };
    // const handleMouseDown = (e: React.MouseEvent) => {
    //     if(releaseId.current){
    //         debugger;
    //         clearTimeout(releaseId.current);
    //         releaseId.current = null;
    //     }
    //     setIsDragging(true);
    //     setDragStart(e.clientX);
    // };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) {
            const yDelta = e.touches[0].clientY - (dragStart?.clientY ?? 0);
            const xDelta = e.touches[0].clientX - (dragStart?.clientX ?? 0);
            if (Math.abs(yDelta) > Math.abs(xDelta)) return;

            const prevPosition = position.get();
            position.set(prevPosition + xDelta);
            setDragStart(e.touches[0]);
            $lastXDelta.current += xDelta;
        }
    };
    // const handleMouseMove = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     if (isDragging) {
    //         const delta = e.clientX - dragStart;
    //         const prevPosition = position.get();
    //         position.set(prevPosition + delta);
    //         setDragStart(e.clientX);
    //     }
    // };

    const handleMouseUp = (_: React.TouchEvent) => {

        releaseId.current = setTimeout(() => {
            setIsDragging(false);
        }, 4500)

        const imageWidth = cardWidth
        const threshold = imageWidth / 5
        const progress = position.get() / carouselWidth;
        const positiveIndex = Math.abs(Math.ceil(cards.length * progress));
        const negativeIndex = Math.abs(Math.floor(cards.length * progress));
        if ($lastXDelta.current > 0) {
            if ($lastXDelta.current > threshold) {
                position.set(cardWidth * -positiveIndex);
            } else {
                position.set(cardWidth * -negativeIndex);
            }
        } else if ($lastXDelta.current < 0) {
            if ($lastXDelta.current < threshold) {
                position.set(cardWidth * -negativeIndex);
            } else {
                position.set(cardWidth * -positiveIndex);
            }

        }
        $lastXDelta.current = 0

    };

    return (
        <motion.div
            className="carousel  touch-pan-y"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            <motion.div
                className="carousel-images"
                style={{ x: position, willChange }}
                transition={{ duration: transitionDuration, ease: "linear" }}
            >
                {slideCards.map((card) => (
                    card
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CustomCarousel;