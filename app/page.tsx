import ContactButton from './ContactButton'
import FirstPage from './FirstPage'
import AnimatedDiamond from './AnimatedDiamond'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import BlogButton from './BlogButton'
import ContactFooter from './ContactFooter'
import AboutMeGrid from './AboutMeGrid'

export default function Home() {



  return (
    <main className="bg-light-900 w-full h-full" >
      <FirstPage />
      <AboutMeGrid/>
      <ProjectsPage />
      <ContactFooter headerID='contactme'/>
    </main>
  )
}
