'use client'

import { motion } from "framer-motion";
import Diamond from "./Diamond";
import AnimatedDiamond from "./AnimatedDiamond";
import DownArrow from "./DownArrow";

export default function FirstPage() {
    return (
        <section className="min-h-screen w-full flex justify-center bg-repeat bg-fixed" style={{ backgroundImage: 'url("/grid.svg")' }}>

            <div className="max-w-fit mt-80 my-auto h-fit">
                <div className="bg-light-900 p-2 rounded">
                    <h1 className='font-display font-black text-7xl text-dark-50 mb-4 text-center'>Emma Alexandria
                        <sup>
                            <sup className='text-3xl'>
                                †
                            </sup>
                        </sup>

                    </h1>
                    <span className="flex flex-row items-center justify-center space-x-2 text-2xl text-accent-500 font-bold bg-gradient-to-r from-accent-500 via-accent-400 to-accent-800 bg-clip-text">
                        <h2 className='text-transparent'>Full stack developer</h2>
                        <span className="block w-2 h-2"><AnimatedDiamond /></span>
                        <h2 className='text-transparent'>Maker of stuff</h2>
                    </span>
                    <p className="font-body text-dark-300 text-l w-2/3 text-center mx-auto mt-8">
                        †Technically it's Emma Alexandria Jellema-Butler but thats too long for a web portfolio
                    </p>
                </div>
                <div className="w-4 mx-auto mt-32">
                    <DownArrow />
                </div>

            </div>


        </section>
    )
}