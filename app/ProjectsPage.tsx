import ProjectListItem from "./ProjectListItem";

export default function ProjectsPage() {
    return (
        <section className="min-h-screen w-full">
            <div className="w-fit mx-auto text-center">

            <h2 className="font-display text-6xl">Projects</h2>
            <ul className="space-y-4 mt-8">
                <ProjectListItem technologies={["SvelteKit", "SCSS"]} url="https://www.emmalexandria.dev">Personal blog</ProjectListItem>
                <ProjectListItem technologies={["Tauri", "SvelteKit", "Typescript"]} url="https://www.github.com/emmalexandria/zenwriter">ZenWriter</ProjectListItem>                
            </ul>
                            
            </div>
        </section>
    )
}