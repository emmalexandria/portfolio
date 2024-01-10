import FirstPage from './FirstPage'
import ProjectsPage from './ProjectsPage'
import ContactFooter from './ContactFooter'
import AboutMeGrid from './AboutMeGrid'
import { Metadata } from 'next'
import Timeline from './Timeline'
import AboutPage from './AboutPage'
import DarkModeSwitch from './components/DarkModeSwitch'

export const metadata: Metadata = {
  title: "Emma Alexandria's Portfolio",
  description: "I'm a software developer from Cape Town. I work in web development, but that was kind of an accident.",
  creator: "Emma Alexandria",
  keywords: ["Portfolio", "Full stack developer", "South Africa"]
}

export default function Home() {
  return (
    <main className="bg-light-900 text-dark-950 dark:bg-dark-950 dark:text-light-800 w-full h-full " >
      <DarkModeSwitch/>
      <FirstPage />
      <AboutPage />
      <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-none px-8 py-4 h-fit mt-16'>
        <ProjectsPage />
        <ContactFooter headerID='contactme' />
      </div>
      <p id="footnote" className="font-body mt-4 px-4 text-center mx-auto italic">
        †Technically it's Emma Alexandria Jellema-Butler but thats too long for a web portfolio
      </p>
    </main>
  )
}
