export default function Button(props: {href: string, children: React.ReactNode}) {
  return (
    <a href={props.href} className="group uppercase font-body font-bold  bg-none px-4 py-2 rounded-sm hover:bg-accent-900 ">
      <p className="">
        {props.children}
      </p>

    </a>
  )
}