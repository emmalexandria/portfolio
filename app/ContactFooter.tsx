import ContactCard from "./ContactCard";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"
import Subheader from "./components/Subheader";

export default function ContactFooter(props: { headerID: string }) {
    return (
        <section className="relative flex flex-col w-full h-full"  >
            <div className="flex flex-col w-full h-full z-10">
                <div className="w-fit h-fit text-center">
                    <Subheader id={props.headerID}>Contact me</Subheader>
                    <ul className="flex flex-col space-y-2">
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

                </div>


            </div>
    
        </section>
    )

}