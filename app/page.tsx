import Image from 'next/image'
import Diamond from './Diamond'
import ContactButton from './ContactButton'
import FirstPage from './FirstPage'
import AnimatedDiamond from './AnimatedDiamond'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import BlogButton from './BlogButton'

export default function Home() {



  return (
    <main className="bg-light-900 w-full h-full bg-repeat" style={{ backgroundImage: 'url("/grid.svg")' }}>
      <span className='absolute right-6 top-6 text-base'>
        <span className='flex flex-row justify-center space-x-4'>
          <BlogButton href="https://blog.emmalexandria.dev">Blog</BlogButton>
          <ContactButton>Contact me</ContactButton>
        </span>
      </span>
      <FirstPage />
      <AboutPage />
      <ProjectsPage />
    </main>
  )
}
