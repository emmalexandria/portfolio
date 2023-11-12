export default function ContactFooter(props: {headerID:string}) {
    return (
        <section className="flex flex-col w-full h-full bg-dark-50 pb-16">
            <div className="w-fit h-fit py-16 mx-auto text-center text-light-900">
                <h2 id={props.headerID} className="font-display text-6xl ">Contact me</h2>
                <ul className="flex flex-col space-y-2">
                    <a>
                        emma.jellemabutler@gmail.com
                    </a>
                    <a>
                        github.com/emmalexandria
                    </a>
                    <a>
                        linkedin.com/in/emma-jb
                    </a>


                </ul>
                            
            </div>
            <div>
                <p className="justify-self-end font-body text-light-700 text-center">This site was built with NextJS, TailwindCSS, and Framer Motion</p>
            </div>
        </section>
    )
    
}