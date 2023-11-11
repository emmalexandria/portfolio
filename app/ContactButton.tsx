'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { scrollElement?: string, children: React.ReactNode }) {

    const clickHandler = () => {
        if (props.scrollElement != null) {
            document.getElementById(props.scrollElement)?.scrollIntoView()
        }
    }

    return (
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
             <button className="px-4 py-2 bg-accent-500 text-onContainerAlt h-fit w-fit rounded-md font-body" onClick={clickHandler}>{props.children}</button>
        </motion.div>
    )
}

