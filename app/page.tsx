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
      <span className='absolute right-6 top-6 text-base hidden sm:visible'>
        <span className='flex flex-row justify-center space-x-4'>
          <BlogButton href="https://blog.emmalexandria.dev">Blog</BlogButton>
          <ContactButton elementID='contactme'>Contact me</ContactButton>
        </span>
      </span>
      <FirstPage />
      <AboutMeGrid/>
      <ProjectsPage />
      <ContactFooter headerID='contactme'/>
    </main>
  )
}
