import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import useWindowSize from "./use-window-size";

export const useAutoAnchorScroll = () => {
  const [fontSize, setFontSize] = useState<number>(0);
  const { width } = useWindowSize();
  useEffect(() => {
    setFontSize(
      document.documentElement.style.fontSize
        ? parseInt(document.documentElement.style.fontSize)
        : 16
    );
  }, []);
  const offset = width > 800 ? 6 * fontSize : 3.4375 * fontSize;

  const lenis = useLenis();

  const handleAnchorScroll = (offset:number) => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target === null) return;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",});
    }
  };

  useEffect(() => {
    if (!lenis || Number.isNaN(offset)) return;
    setTimeout(() => {
        handleAnchorScroll(offset);

    }, 500);
  }, [lenis,offset]);1
};
