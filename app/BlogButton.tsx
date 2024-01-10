'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { href: string, children: React.ReactNode }) {

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ scale: 1.00 }}>
            <a target="_blank" href={props.href} className="font-semibold w-full text-center block px-4 font-body bg-light-900 py-2 border-2 box-border border-light-500 text-dark-100 hover:border-dark-300">{props.children}</a>
        </motion.div>)
}

