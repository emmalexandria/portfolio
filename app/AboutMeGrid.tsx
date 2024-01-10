import { useScroll } from "framer-motion";
import Image from "next/image"
import { useRef } from "react";
import { SiSvelte, SiTypescript, SiTailwindcss, SiSass, SiRust } from "react-icons/si"
import Subheader from "./components/Subheader";
import Header from "./components/Header";
import SubHeader from "./components/Subheader";

export default function AboutMeGrid() {
 

    return (
        <div className="dark:bg-dark-900 p-8 border border-r-0 border-l-0 border-t-1 border-b-1 border-light-700 dark:border-none max-w-full ">
            
            <div className="grid grid-rows-1 md:grid-rows-2 md:grid-cols-4 max-w-full gap-8 lg:w-3/4 xl:w-1/2">
                <div className="max-w-full md:row-span-2">
                <Image src="/me2.png" alt="Picture of me" width={896} height={896} className="md:hidden object-top" />
                <Image src="/me.png" alt="Picture of me" width={881} height={1791} className="hidden md:block object-top object-cover h-full" />
                </div>

                <div className="max-w-full md:col-span-3">
                    <Header>About me</Header>
                    <div className="font-body md:text-xl space-y-8 leading-relaxed">
                        <p>
                            I’m a software developer from Cape Town, South Africa. I accidentally ended up becoming a web developer, which was
                            not my intention.
                        </p>
                        <p>
                            I’m motivated by the great joy found in making stuff. I love
                            the feeling of something being <em>done</em>, packaged up with a logo and a nice README.
                        </p>
                    </div>
                    
                </div>
                
                <div className="max-w-full md:col-span-2">
                    <Subheader>Skills</Subheader>
                    <div className="font-body md:text-xl leading-relaxed h-fit">
                        <p>I called myself a 'maker of stuff' for a reason. Besides writing software,
                            I’m a competent writer, an amateur photographer, and familiar with a laundry list of creative software.
                        </p>
                    </div>
                </div>

                <div className="">
                        <SubHeader>Technologies</SubHeader>
                        <span className="flex w-full grow text-3xl justify-between">
                            <SiSvelte /><SiTypescript /><SiTailwindcss /><SiSass /><SiRust />
                            
                        </span>
                        <p className="hidden md:block text-xs font-body mx-auto my-4 italic">And a bunch of stuff that I'm not confident enough to put here</p>

                    </div>
            </div>
        </div>
    )
}