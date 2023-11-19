import TimelineItem from "./TimelineItem";
import { ITimelineItem } from "./timelineType";

export default function TimelineContainer(props: { items: ITimelineItem[] }) {
    return (
        <div className="md:w-fit md:max-w-lg md:mx-auto">
            {props.items.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    )
}