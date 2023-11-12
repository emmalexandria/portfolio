export default function ContactFooter(props: {headerID:string}) {
    return (
        <section className="w-full bg-dark-50">
            <div className="w-fit mx-auto text-center pb-80 text-light-900">
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
        </section>
    )
    
}