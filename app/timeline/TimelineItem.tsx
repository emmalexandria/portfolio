import { ITimelineItem } from "./timelineType";

export default function TimelineItem(props: { data: ITimelineItem }) {
    return (
        <div className="font-body border bg-light-800 rounded-md border border-2 border-light-700 px-4 py-2">
            <div>
                <span className="flex flex-row">
                    <h2 className="font-display text-2xl">{props.data.organization}</h2>
                    <time>{props.data.startDate.toDateString()}</time>
                </span>
                
                <p>{props.data.role}</p>
                <p>{props.data.description}</p>
            </div>
            <span />
        </div>
    )
}