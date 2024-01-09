'use client'

import Image from "next/image"
import AboutMeGrid from "./AboutMeGrid"
import Timeline from "./Timeline"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


export default function AboutPage() {
    return (
    
        <div className="shadow-sm bg-center bg-repeat bg-contain sm:bg-auto sm:bg-left-top bg-fixed my-8" >
            <AboutMeGrid/>  
               {/*  <Timeline/> */}
        </div>
    )
}

