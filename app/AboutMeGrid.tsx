import Image from "next/image"
import { SiSvelte, SiTypescript, SiTailwindcss, SiSass, SiRust } from "react-icons/si"

export default function AboutMeGrid() {
    return (
        <div className="bg-light-900 p-4 border border-r-0 border-l-0 border-t-1 border-b-1 border-light-700 max-w-full ">
            <div className="grid grid-rows-1 md:grid-rows-4 max-w-full gap-8">
                <div className="max-w-full">
                <Image src="/me2.png" alt="Picture of me" width={881} height={1791} className="md:hidden object-top rounded-md" />
                    <Image src="/me.png" alt="Picture of me" width={881} height={1791} className="hidden md:block object-top rounded-md" />
                    
                </div>

                <div className="bg-light-900 max-w-full">
                    <h2 className="font-display mb-2 text-5xl md:text-6xl ">About me</h2>
                    <div className="font-body md:text-xl space-y-8 leading-relaxed">
                        <p>
                            I’m a software developer from Cape Town, South Africa. I accidentally ended up becoming a web developer, which was
                            not my intention.
                        </p>
                        <p>
                            I’m motivated by the beauty found in creating things to the best of your ability. I love
                            the feeling of something being <em>done</em>, packaged up with a logo and a nice README.
                        </p>
                    </div>
                    
                </div>
                
                <div className="bg-light-900 max-w-full">
                    <h3 className="font-display text-4xl md:text6xl text-dark-100 mb-2">Skills</h3>
                    <div className="font-body md:text-base leading-relaxed h-fit">
                        <p>There’s a reason I called myself a ‘maker of stuff’. Besides software,
                            I’m a competent writer, an amateur photographer, and familiar with a laundry list of creative software.
                        </p>
                    </div>
                </div>

                <div className="">
                        <h3 className="font-display text-3xl md:text-4xl text-dark-100 mb-2">Technologies</h3>
                        <span className="flex flex-wrap max-w-full justify-between max-w-full text-4xl">
                            <SiSvelte /><SiTypescript /><SiTailwindcss /><SiSass /><SiRust />
                            <p className="hidden md:block text-sm">And a bunch of stuff that I'm not confident enough to put here</p>
                        </span>

                    </div>
            </div>
        </div>
    )
}