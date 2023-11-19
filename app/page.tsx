import FirstPage from './FirstPage'
import ProjectsPage from './ProjectsPage'
import ContactFooter from './ContactFooter'
import AboutMeGrid from './AboutMeGrid'
import { Metadata } from 'next'
import Timeline from './Timeline'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: "Emma Alexandria's Portfolio",
  description: "I'm a software developer from Cape Town. I work in web development, but that was kind of an accident.",
  creator: "Emma Alexandria",
  keywords: ["Portfolio", "Full stack developer", "South Africa"]
}

export default function Home() {
  return (
    <main className="bg-light-900 w-full h-full" >
      <FirstPage />
      <AboutPage/>
      <ProjectsPage />
      <ContactFooter headerID='contactme'/>
    </main>
  )
}
