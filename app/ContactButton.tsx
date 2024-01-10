'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { elementID: string, children: React.ReactNode }) {

    const clickHandler = () => {
        if (props.elementID != null) {
            document.getElementById(props.elementID)?.scrollIntoView({ behavior: 'smooth', })
        }
    }

    { }

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ scale: 1.00 }}>
            <button className="w-full font-semibold text-center block px-4 py-2 bg-light-900 font-body border-2 box-border border-accent-900 text-dark-100 hover:bg-accent-900 hover:text-accentOnContainer" onClick={clickHandler}>{props.children}</button>
        </motion.div>
    )
}

