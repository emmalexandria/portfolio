export default function Button(props: {href: string, children: React.ReactNode}) {
  return (
    <a href={props.href} className="transition-all group uppercase font-body font-bold  bg-none px-4 py-2 rounded-sm hover:bg-accent-900 hover:dark:bg-accent-500 ">
      <p className="">
        {props.children}
      </p>

    </a>
  )
}