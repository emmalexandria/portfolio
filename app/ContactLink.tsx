export default function ContactLink(props: { children: React.ReactNode, name: string, url: string }) {
    return (
        <li>
        <a className="block font-body sm:text-xl hover:text-accent-500" href={props.url} target="_blank">
            <span className="flex flex-row items-center space-x-2 ">
                {props.children}
                <p>{props.name}</p>
            </span>
        </a>
        </li>

    )
}