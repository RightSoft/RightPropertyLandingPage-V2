import { motion } from "framer-motion";

export function More(props: any) {
  return (
    <motion.svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 5.4541V19.4541M5 12.4541H19" stroke="#F08E37" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </motion.svg>

  );
}

export function Less(props: any) {
  return (
    <motion.svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12.4541H19" stroke="#FFA657" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </motion.svg>
    // <motion.svg
    //   width="20"
    //   height="20"
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <line
    //     x1="2"
    //     y1="10"
    //     x2="18"
    //     y2="10"
    //     stroke="black"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //   />
    // </motion.svg>
  );
}
