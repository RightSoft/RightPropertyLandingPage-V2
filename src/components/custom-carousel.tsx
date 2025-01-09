import { useState, useRef, useEffect } from 'react';
import useWindowSize from '../hooks/use-window-size';
import { m, useMotionValue, useMotionValueEvent, useSpring, useWillChange } from 'framer-motion';

interface CarouselProps {
    cards: React.ReactNode[];
    speed: number; // in ms
}
const CustomCarousel = ({ cards, speed }: CarouselProps) => {
    // ====== Carousel ======
    const willChange = useWillChange();
    const { width } = useWindowSize();
    const cardWidth = width <= 800 ? width : 375;
    const carouselWidth = cardWidth * cards.length;
    // ====== Drag ======
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<Partial<Touch>>();
    const $lastXDelta = useRef<number>(0);
    const $prevPosition = useRef<number>(0);
    // ====== Auto Slide ======
    const transitionDuration = isDragging ? 0 : 3;
    const positionmValue = useMotionValue(0);
    const position = useSpring(positionmValue, { mass: 0.5, stiffness: 50, damping: 15 });
    const releaseId = useRef<number | null>(null);
    const $started_at = useRef<number>(Date.now());
    let timerId: number;

    // Carousel starts at the third card
    useEffect(() => {
        position.jump(cardWidth * -2);
    }, [cardWidth]);

    /* --------------------------------
    *            AUTO SLIDE
    * ------------------------------- */
    const timerHandler = () => {
        const now = Date.now();
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
        //  Wait for the cardWidth to be set
        //  Stop the m if the user is dragging
        if (!isDragging && cardWidth > 0) timerHandler();
        return () => cancelAnimationFrame(timerId);
    }, [isDragging, cardWidth])

    /* --------------------------------
    *           INFINITE LOOP
    * ------------------------------- */
    useMotionValueEvent(position, "change", (latest: number) => {
        const direction = latest - $prevPosition.current;
        const jumpPoint = cardWidth * (cards.length - 1)
        if (direction < 0 && (Math.round(latest) == Math.round(-(jumpPoint)))) {
            jumpToFirstCard(latest + jumpPoint);
        }
        else if (direction > 0 && (Math.round(latest) == 0)) {
            jumpToLastCard(latest);
        }
        $prevPosition.current = latest;
    })

    const jumpToFirstCard = (offset: number) => {
        position.jump((-cardWidth * 1) + offset);
    }
    const jumpToLastCard = (offset: number) => {
        position.jump((-cardWidth * (cards.length - 2)) - offset);
    }

    /* --------------------------------
    *        SNAP TO CARD ON DRAG
    * ------------------------------- */
    const handleTouchStart = (e: React.TouchEvent) => {
        if (releaseId.current) {
            clearTimeout(releaseId.current);
            releaseId.current = null;
        }
        setIsDragging(true);
        setDragStart(e.touches[0]);
    };

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

    const handleTouchEnd = () => {
        releaseId.current = window.setTimeout(() => {
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
        <m.div
            className="carousel touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <m.div
                className="carousel-images"
                style={{ x: position, willChange }}
                transition={{ duration: transitionDuration, ease: "linear" }}
            >
                {cards.map((card) => (
                    card
                ))}
            </m.div>
        </m.div>
    );
};

export default CustomCarousel;