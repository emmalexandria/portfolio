import ContactCard from "./ContactCard";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

export default function ContactFooter(props: { headerID: string }) {
    return (
        <section className="relative flex flex-col w-full h-full bg-gradient-to-b from-transparent to-accent-700 -z-5"  >
            <div className="flex flex-col w-full h-full z-10">
                <div className="w-fit h-fit py-32 mt-16 mx-auto text-center text-accentOnContainerAlt">
                    <h2 id={props.headerID} className="font-display text-5xl sm:text-7xl ">Contact me</h2>
                    <ul className="flex flex-col space-y-2 items-center">
                        <li>
                            <ContactCard name="emma.jellemabutler@gmail.com" url="mailto:emma.jellemabutler@gmail.com"><AiOutlineMail /></ContactCard>
                        </li>
                        <li>
                            <ContactCard name="github.com/emmalexandria" url="https://www.github.com/emmalexandria"><AiOutlineGithub /></ContactCard>
                        </li>
                        <li>
                            <ContactCard name="linkedin.com/in/emma-jb" url="https://www.linkedin.com/in/emma-jb"><AiOutlineLinkedin /></ContactCard>
                        </li>

                    </ul>

                </div>
                <div>
                    <p className="justify-self-end font-body text-accentOnContainer mb-4 italic text-center">This site was built with NextJS, TailwindCSS, and Framer Motion</p>
                </div>


            </div>
            <div className="absolute w-full h-full mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTAyIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE1IiBzcGVjdWxhckNvbnN0YW50PSIwLjc1IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiNGRkZDRkEiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAJCTxmZURpc3RhbnRMaWdodCBhemltdXRoPSIzIiBlbGV2YXRpb249IjEwMCI+PC9mZURpc3RhbnRMaWdodD4KICAJPC9mZVNwZWN1bGFyTGlnaHRpbmc+CiAgCjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iI2ZmZmNmYSIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==")' }} />
        </section>
    )

}