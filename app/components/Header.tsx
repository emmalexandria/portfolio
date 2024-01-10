export default function Header(props: {children: React.ReactNode, id?:string}) {
  return <h2 id={props.id} className="font-display uppercase font-semibold mb-2 text-4xl md:text-6xl ">{props.children}</h2>
}