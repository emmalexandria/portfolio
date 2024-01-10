import ProjectListItem from "./ProjectListItem";
import Header from "./components/Header";
import Subheader from "./components/Subheader";

export default function ProjectsPage() {
    return (
        <section className="w-full flex bg-center bg-repeat bg-contain sm:bg-auto sm:bg-left-top bg-fixed">
                <div className="w-fit h-fit">

                    <Header>Projects</Header>
                    <ul className="space-y-4 mt-8">
                        <ProjectListItem n={1} technologies={["NextJS", "MDX", "Contentlayer"]} url="https://www.github.com/emmalexandria/next-blog" name="Personal blog" />
                        <ProjectListItem n={2} technologies={["Tauri", "SvelteKit", "Typescript"]} url="https://www.github.com/emmalexandria/zenwriter" name="ZenWriter" />
                    </ul>

                </div>

        </section>
    )
}