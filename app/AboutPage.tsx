'use client'

import Image from "next/image"
import AboutMeGrid from "./AboutMeGrid"
import Timeline from "./Timeline"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


export default function AboutPage() {
    return (
    
        <div className="shadow-sm dark:shadow-none " >
            <AboutMeGrid/>  
               {/*  <Timeline/> */}
        </div>
    )
}

