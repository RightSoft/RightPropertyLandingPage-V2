import { useState, useRef, useEffect } from 'react';
import './Carousel.css';
import useWindowSize from '../hooks/use-window-size';
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent } from 'framer-motion';

interface CarouselProps {
    cards: React.ReactNode[];
    speed: number;
}
const Carousel = ({ cards, speed }: CarouselProps) => {
    const [slideCards, setSlideImages] = useState<React.ReactNode[]>(cards);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const carouselRef = useRef(null);
    const { width } = useWindowSize();
    const cardWidth = width <= 800 ? width : 375;
    const transitionDuration = isDragging ? 0 : 3;
    const position = useMotionValue(-cardWidth);
    const updatePosition = (isDragging: boolean) => {
        if (!isDragging) {
            const prevPosition = position.get();
            position.set(prevPosition - 0.5);
        }
    }
    useEffect(() => {
        updatePosition(isDragging)
        const id = setInterval(() => {
            updatePosition(isDragging)
        }, speed);
        return () => {
            clearInterval(id)
        }
    }, [isDragging, speed]);
    useMotionValueEvent(position, "change", (latest: number) => {
        const carouselWidth = cardWidth * cards.length;
        const progress = latest / carouselWidth;
        const negativeIndex = (Math.ceil(cards.length * progress));
        const positiveIndex = (Math.floor(cards.length * progress));
        if (negativeIndex == -1 * (cards.length - 1)) {
            negativeArrange();
        } else if (positiveIndex == 0) {
            positiveArrange();
        }
    })


    const negativeArrange = () => {
        setIsDragging(true);
        console.log('negativeArrange');
        let tmpArr = [...slideCards];
        let firstElement = tmpArr.shift();
        tmpArr.push(firstElement);
        setSlideImages(tmpArr);
        position.jump(-cardWidth * (slideCards.length - 1) + cardWidth);
        setTimeout(() => {
            setIsDragging(false);

        }, 1);



    }
    const positiveArrange = () => {
        let tmpArr = [...slideCards];
        let lastElement = tmpArr.pop();
        tmpArr = [lastElement, ...tmpArr]
        setSlideImages(tmpArr);
        position.jump(-cardWidth);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setDragStart(e.touches[0].clientX);
    };
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart(e.clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) {
            const delta = e.touches[0].clientX - dragStart;
            const prevPosition = position.get();
            position.set(prevPosition + delta);
            setDragStart(e.touches[0].clientX);
        }
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const delta = e.clientX - dragStart;
            const prevPosition = position.get();
            position.set(prevPosition + delta);
            setDragStart(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <motion.div
            className="carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <motion.div
                className="carousel-images"
                style={{ x: position }}
                transition={{ duration: transitionDuration, ease: "linear" }}
            >
                <AnimatePresence mode='popLayout'>
                    {slideCards.map((card) => (
                        card
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Carousel;