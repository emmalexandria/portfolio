import AnimateOnView from "./AnimateOnView";

export default function GridItem(props: { n: number, children: React.ReactNode }) {
    return (
        <AnimateOnView n={props.n}>
            <div className="bg-light-800 rounded-md px-8 py-8 outline outline-2 outline-light-700 hover:outline-accent-900 ">
                {props.children}
            </div>
        </AnimateOnView>
    )
}

