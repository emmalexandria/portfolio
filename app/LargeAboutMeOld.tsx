'use client'

import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import AnimateOnView from "./AnimateOnView";
import GridItem from "./GridItem";
import { SiSvelte, SiTypescript, SiRust, SiSass, SiTailwindcss } from 'react-icons/si'

export default function LargeAboutMe() {

    const controls = useAnimation();
    const ref: MutableRefObject<Element | undefined> = useRef()
    const inView = useInView(ref as MutableRefObject<Element>);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <div className="h-3/4 my-32">
            <div className="grid grid-rows-4 grid-cols-8 w-full h-full px-48 gap-6">
                <motion.div whileHover={{ scale: 0.99 }} className="row-span-4 col-start-1 col-span-2 overflow-clip rounded-md">
                    <AnimateOnView n={1} ><Image src="/me.png" alt="A portrait of me" width={881} height={1791} className="" /></AnimateOnView>
                </motion.div>

                <motion.div whileHover={{ scale: 0.99 }} className="col-start-3 col-span-3 row-span-3 h-full w-full">
                    <GridItem n={2}>
                        <h1 className="font-display text-6xl">About me</h1>
                        
                    </GridItem>
                </motion.div>
                <motion.div whileHover={{ scale: 0.99 }} className="col-span-3 col-start-3 row-start-4 h-full w-full">
                    <GridItem n={3}>
                        


                    </GridItem>
                </motion.div>

            </div>
        </div>
    )
}