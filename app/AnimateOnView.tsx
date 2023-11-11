'use client'

import { easeIn, easeInOut, motion, useInView } from "framer-motion"

export default function AnimateOnView(props: { n: number, children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: props.n * 0.1, easings: easeIn}}
            
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 1 }
            }}
        >
            {props.children}
        </motion.div>
    )
}