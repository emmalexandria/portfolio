export default function Subheader(props: {children: React.ReactNode, id?:string}) {
    return <h2 id={props.id} className="font-display uppercase font-bold mb-2 text-3xl md:text-6xl ">{props.children}</h2>
}