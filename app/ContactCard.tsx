export default function ContactCard(props: { children: React.ReactNode, name: string, url: string }) {
    return (
        <a className="block font-body sm:text-xl px-4 py-2 hover:bg-light-900/50 hover:text-dark-100 rounded-md" href={props.url} target="_blank">
            <span className="flex flex-row items-center space-x-2 ">
                {props.children}
                <p>{props.name}</p>
            </span>
        </a>
    )
}