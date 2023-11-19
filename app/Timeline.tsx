import TimelineContainer from "./timeline/TimelineContainer";
import { ITimelineItem } from "./timeline/timelineType";

export default function Timeline() {

    const items: ITimelineItem[] = [
    {
        role: "Web designer",
        organization: "AnkiDroid",
        startDate: new Date("19 Nov 2023"),
        description: "Pushed for and then created a website for the project using SvelteKit and TailwindCSS",
    },
    {
        role: "Web designer",
        organization: "AnkiDroid",
        startDate: new Date("19 Nov 2023"),
        description: "Pushed for and then created a website for the project using SvelteKit and TailwindCSS",
    },
    {
        role: "Web designer",
        organization: "AnkiDroid",
        startDate: new Date("19 Nov 2023"),
        description: "Pushed for and then created a website for the project using SvelteKit and TailwindCSS",
    }
    ]

    return (
        <div>
            <h2>Experience</h2>
            <TimelineContainer items={items}/>
        </div>
        
    )
}