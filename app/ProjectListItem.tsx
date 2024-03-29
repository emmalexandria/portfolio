'use client'

import { IoMdArrowForward } from "react-icons/io";
import Diamond from './Diamond'
import { m, LazyMotion, domAnimation, easeInOut } from 'framer-motion'
import SubHeader from "./components/Subheader";

export default function ProjectListItem(props: { url: string, name: string, technologies: string[], n: number }) {

    return (
        <LazyMotion features={domAnimation}>
            <m.li className="block space-y-1"
                
                initial="init"
                whileHover="hovered"
                transition={{ duration: 0.1, easings: easeInOut }}
                variants={{
                    hovered: { opacity: 1, scale: 1, x: 10},
                    init: { opacity: 1, scale: 1}
                }}>
            <a href={props.url} target="_blank" className="hover:text-accent-500 block text-4xl flex flex-row items-center space-x-4">
                   <SubHeader>{props.name}</SubHeader>
                    <IoMdArrowForward style={{verticalAlign: 'middle'}}/>
            </a>
                <span className='flex flex-row items-center font-body text-dark-700 dark:text-light-400'>

                    {props.technologies.map((tech, i) => {
                        return i < props.technologies.length - 1 ?
                            <span key={tech} className='flex flex-row items-center'>
                                <p >{tech}</p>
                                <span className='w-2 h-2 mx-2'>
                                    <Diamond />
                                </span>
                            </span>
                            :
                            <p key={tech}>{tech}</p>
                    })}
                </span>
            </m.li>
        </LazyMotion>
    )

}