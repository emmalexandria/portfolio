'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { href: string, children: React.ReactNode }) {

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ scale: 1.00 }}>
            <a target="_blank" href={props.href} className="w-full text-center block px-4 font-body bg-light-900 py-2 border border-2 rounded box-border border-light-700 text-dark-100 hover:bg-light-700">{props.children}</a>
        </motion.div>)
}

