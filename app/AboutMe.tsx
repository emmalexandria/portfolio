import Image from "next/image"
import { SiRust, SiSass, SiSvelte, SiTailwindcss, SiTypescript } from "react-icons/si"

export default function AboutMe() {
    return (
        <div className=" flex flex-row px-32 py-16 h-fit bg-light-900 border-top-2 border-bottom-2 border border-light-700 items-center">
            <div className="w-1/4">
                <Image src="/me.png" alt="Picture of me" width={881} height={1791} className="object-cover object-top rounded-md"/>
            </div>
            
            <div className="flex-row flex">
                <div className="bg-light-900 h-fit p-8">
                    <h2 className="font-display text-6xl">About me</h2>
                    <div className="font-body text-xl space-y-8 leading-relaxed h-fit mt-auto">
                        <p>
                            I’m a software developer from Cape Town, South Africa. I accidentally ended up becoming a web developer, which was
                            not my intention.
                        </p>
                        <p>
                            I’m motivated by the beauty found in creating things to the best of your ability. I love
                            the feeling of something being <em>done</em>, packaged up with a logo and a nice README.
                        </p>
                    </div>
                    <div className="py-8">
                        <h3 className="font-display text-4xl text-dark-100 mb-4">Technologies</h3>
                        <span className="flex flex-row align-center  space-x-4 text-3xl text-dark-200 space-x-4 ">
                            <SiSvelte /><SiTypescript /><SiTailwindcss /><SiSass /><SiRust />
                            <p className="text-sm">And a bunch of stuff that I'm not confident enough to put here</p>
                        </span>

                    </div>
                </div>
                <div className="bg-light-900 h-fit w-fit p-8">
                    <h3 className="font-display text-4xl text-dark-100">Skills</h3>
                    <div className="font-body text-base space-y-8 leading-relaxed h-fit mt-auto">
                        <p>There’s a reason I called myself a ‘maker of stuff’.
                            While I mostly write software, I’ve picked up a long list of skills over the years.
                            I’m a competent writer, an amateur photographer, and familiar with a laundry list of creative software.
                        </p>
                        <p>
                            If there is a creative task that can be done, there’s about a 50% chance that I’ve given it a try. If not, I learn very quickly.
                        </p>
                    </div>
                </div>
            </div>




        </div>
        /* <div className="grid cols-8 rows-4 gap-4">
            <div className="row-start-1 row-span-4 col-span-2">
                <div className="bg-light-800 border border-2 border-light-700 rounded-md w-full h-full">
                    
                </div>
            </div>
            <div className="col-start-3 row-span-3 col-span-3 w-full h-full">
                <div className="bg-light-800 border border-2 border-light-700 rounded-md w-full h-full p-4">
                   
                    
                </div>
            </div>
            <div className=" col-start-3 row-start-4 row-span-1 col-span-3 w-full h-full">
                <div className="bg-light-800 border border-2 border-light-700 rounded-md  w-full h-full p-4">
                    <div className="flex-col flex h-full w-full">
                        
                        
                    </div>
                </div>
            </div>
            <div className=" row-span-2 col-span-3 col-start-6 row-start-1 w-full h-full flex">
                <div className="bg-light-800 border border-2 border-light-700 rounded-md w-full h-full p-4">
                    
                </div>
            </div>
            <div className=" row-span-2 col-span-3 col-start-6 row-start-3 w-full h-full">
                <div className="bg-light-800 border border-2 border-light-700 rounded-md w-full h-full">
                    <Image src="/flower.png" alt="Picture of a yellow flower" width={493} height={474} className="object-cover rounded-md w-full h-full"/>
                </div>
            </div>



        </div> */


    )


}