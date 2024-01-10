'use client'

import { MotionConfig, motion, spring } from "framer-motion";
import Diamond from "./Diamond";
import AnimatedDiamond from "./AnimatedDiamond";
import DownArrow from "./DownArrow";
import ContactButton from "./ContactButton";
import BlogButton from "./BlogButton";
import { useEffect } from "react";
import { easeInOut } from "framer-motion/dom";
import Button from "./Button";

export default function FirstPage() {


    const typingEffect = () => {
        document.getElementById
    }


    /* style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDgwMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiPjxnIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiM2ZTY5NjciIGZpbGw9Im5vbmUiPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSIyMDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIyMDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjQwMCIgY3k9IjQwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI4MDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjIwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iNjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI2MDAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjgwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSI4MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjwvZz48L3N2Zz4=")' }} */
    return (
        <MotionConfig reducedMotion="user">
            <section className="h-screen flex flex-col justify-center px-4" >
                    <div className="h-1/2 flex flex-col justify-center">
                        <motion.h1 initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 0.4, ease: "easeOut", delay: 0}} id="main-header" className='font-mono font-black uppercase text-5xl sm:text-8xl md:text-9xl mb-1 w-min sm:w-fit'>
                            Emma Alexandria
                            <sup>
                                <sup className='text-3xl'>
                                    <a href="#footnote" className="hover:text-accent-500">
                                    †
                                    </a>
                                   
                                </sup>
                            </sup>
                        </motion.h1>
                        <span className="flex flex-row items-center font-body text-center space-x-2 text-lg sm:text-2xl  font-bold text-accent-700 dark:text-accent-500">
                            <h2 className="w-fit">Full stack developer</h2>
                            <span className="block w-2 h-2"><AnimatedDiamond /></span>
                            <h2 className="w-fit">Maker of stuff</h2>
                        </span>
                    </div>
                        
                        <span className='flex flex-col w-max md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8'>
                            <Button href="#contactme">
                                Contact me
                            </Button>
                            <Button href="https://blog.emmalexandria.dev">
                                My blog
                            </Button>
                        </span>
            </section>
        </MotionConfig>

    )
}