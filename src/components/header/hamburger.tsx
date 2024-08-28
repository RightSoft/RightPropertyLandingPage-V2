import { motion } from "framer-motion";

interface HamburgerProps {
    isMenuShown: boolean;
    toggleMenu: () => void;
}
const Path = (props: any) => (
    <motion.path
        strokeWidth="3"
        strokeLinecap="round"
        stroke="white"
        {...props}
    />
);
export default function Hamburger({ isMenuShown, toggleMenu }: HamburgerProps) {
    return <button
        className={`menu-toggle-button flex justify-center items-center ${isMenuShown ? "" : ""}`}
        onClick={toggleMenu}

    >
        <motion.svg width="24" height="24" viewBox="0 0 24 24" animate={isMenuShown ? "open" : "closed"}>
            <Path
                variants={{
                    closed: { d: "M 2 3.5 L 19 3.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
                stroke={"#5EC6D3"}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 10.423 L 19 10.423" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
                stroke={"#5EC6D3"}
                transition={{ duration: 0.1 }}
            />
            <Path
                d="M 2 17.346 L 14.5 17.346"
                variants={{
                    closed: { opacity: 1, },
                    open: { opacity: 0 }
                }}
                stroke={"#5EC6D3"}
                transition={{ duration: 0.1 }}

            />
        </motion.svg>
    </button>
}