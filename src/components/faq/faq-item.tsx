import { motion, AnimatePresence } from "framer-motion";

import { More, Less } from "./faq-svg/faq-svg";
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  activeIndex: number;
  setActiveIndex: () => void;
}
export default function FAQItem({
  question,
  answer,
  activeIndex,
  setActiveIndex,
  index,
}: FAQItemProps) {
  return (
    <button className="flex flex-col gap-2" onClick={setActiveIndex}>
      <div className="flex items-center gap-3 text-[#56586C]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index == activeIndex ? "minus" : "plus"}
            initial={{
              rotate: index == activeIndex ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.015,
                ease: "circOut",
              },
            }}
            exit={{
              zIndex: 0,
              rotate: index == activeIndex ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {index == activeIndex ? <Less /> : <More />}
          </motion.div>
        </AnimatePresence>
        <div className="text-24 font-medium">{question}</div>
      </div>
      <AnimatePresence mode="wait">
        {index == activeIndex && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            key="test"
            className="pl-9 text-left"
          >
            <div className="text-24 font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
