'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { scrollElement?: string, children: React.ReactNode }) {

    const clickHandler = () => {
        if (props.scrollElement != null) {
            document.getElementById(props.scrollElement)?.scrollIntoView()
        }
    }

    return (
        <motion.div whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
             <button className="px-4 py-2 bg-accent-700 text-onContainerAlt h-fit w-fit rounded-md font-body font-bold hover:bg-accent-500" onClick={clickHandler}>{props.children}</button>
        </motion.div>
    )
}

