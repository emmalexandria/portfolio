export default function ContactCard(props: { children: React.ReactNode, name: string, url: string }) {
    return (
        <a className="flex flex-row font-body text sm:text-xl items-center space-x-2 px-4 py-2" href={props.url} target="_blank">
            {props.children}
            <p>{props.name}</p>
        </a>
    )
}