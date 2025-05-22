import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function FadeParent({
    children
}: {
    children: React.ReactNode;
}) {
    const $ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if ($ref.current) {
            gsap.to($ref.current, {
                opacity: 1,
                duration: 1.7,
                ease: "sine.out"
            })
        }
    }, [])
    return <div ref={$ref} className="opacity-0">{children}</div>;
}