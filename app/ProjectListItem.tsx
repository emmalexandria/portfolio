import { BiLink } from 'react-icons/bi'
import Diamond from './Diamond'

export default function ProjectListItem(props: { url: string, technologies: string[], children: React.ReactNode }) {

    return (
        <li className="p-4 bg-light-800 rounded-md border border-2 border-light-700">
            <span className='flex flex-row items-center mb-2'>
                <h1 className="text-2xl mr-auto">{props.children}</h1>
                <a href={props.url} target='_blank'>
                    <BiLink className="text-dark-100 hover:text-accent-500 hover:cursor-pointer text-2xl" />
                </a>
                
            </span>
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
        </li>
    )

}