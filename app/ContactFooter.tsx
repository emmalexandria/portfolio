import ContactLink from "./ContactLink";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"
import Subheader from "./components/Subheader";
import Header from "./components/Header";

export default function ContactFooter(props: { headerID: string }) {
    return (
        <section className="flex flex-col w-full h-full"  >
                <div className="w-fit h-fit">
                    <Header id={props.headerID}>Contact me</Header>
                    <ul className="flex flex-col space-y-4 mt-8">
                        <ContactLink name="emma.jellemabutler@gmail.com" url="mailto:emma.jellemabutler@gmail.com"><AiOutlineMail style={{verticalAlign: 'middle'}}/></ContactLink>
                        <ContactLink name="github.com/emmalexandria" url="https://www.github.com/emmalexandria"><AiOutlineGithub style={{verticalAlign: 'middle'}}/></ContactLink>
                        <ContactLink name="linkedin.com/in/emma-jb" url="https://www.linkedin.com/in/emma-jb"><AiOutlineLinkedin style={{verticalAlign: 'middle'}}/></ContactLink>
                    </ul>

                </div>
        </section>
    )

}