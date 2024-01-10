export default function SubHeader(props: {children: React.ReactNode, id?:string}) {
    return <h3 id={props.id} className="font-display uppercase font-semibold mb-2 text-2xl md:text-4xl ">{props.children}</h3>
  }