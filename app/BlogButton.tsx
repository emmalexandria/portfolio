'use client'

import { motion } from "framer-motion"

export default function ContactButton(props: { href: string, children: React.ReactNode }) {

    return (
       <a target="_blank" href={props.href} className="block px-4 py-2 bg-light-700 text-onContainerAlt h-fit w-fit rounded-md font-body hover:bg-light-600">{props.children}</a>
    )
}

