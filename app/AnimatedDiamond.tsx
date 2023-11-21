'use client'

import { motion } from "framer-motion";

export default function AnimatedDiamond() {
    return (
        <motion.div
          className="w-full h-full bg-light-50 rounded-full block"
          initial={{scale: 1.5}}
          animate={{
            scale: [1.5, 1],
            rotate: [0, 45],
            borderRadius: ["50%", "0%"],
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          
        </motion.div>
      );
}