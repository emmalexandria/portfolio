'use client'

import { motion } from "framer-motion";

export default function AnimatedDiamond() {
    return (
        <motion.div
          className="w-full h-full bg-light-50 rounded-full block"
          animate={{
            rotate: [0, 45],
            borderRadius: ["50%", "0%"],
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          
        </motion.div>
      );
}