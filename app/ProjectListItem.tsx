'use client'

import { BiLink } from 'react-icons/bi'
import Diamond from './Diamond'
import { m, LazyMotion, domAnimation, easeInOut } from 'framer-motion'

export default function ProjectListItem(props: { url: string, name: string, technologies: string[], n: number }) {

    return (
        <LazyMotion features={domAnimation}>
            <m.li className="block p-4 bg-light-800 rounded-md border border-2 border-light-700 hover:border-accent-700 hover:bg-light-900 hover:cursor-pointer"
                
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: props.n * 0.2, easings: easeInOut }}
                variants={{
                    visible: { opacity: 1, scale: 1},
                    hidden: { opacity: 0, scale: 1.1 }
                }}>
            <a href={props.url} target="_blank">
                <h1 className="text-2xl text-left">{props.name}</h1>

                <span className='flex flex-row items-center font-body text-light-100'>

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
            </a>
            </m.li>
        </LazyMotion>
    )

}