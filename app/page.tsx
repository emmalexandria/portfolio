import Image from 'next/image'
import Diamond from './Diamond'
import ContactButton from './ContactButton'
import FirstPage from './FirstPage'
import AnimatedDiamond from './AnimatedDiamond'
import SecondPage from './SecondPage'

export default function Home() {
  


  return (
    <main className="bg-light-900 w-full h-full bg-repeat" style={{backgroundImage: 'url("/grid.svg")'}}>
      <span className='absolute right-6 top-6 text-base'>
        <ContactButton>Contact me</ContactButton>
        <AnimatedDiamond/>
      </span>
      <FirstPage/>
      <SecondPage/>
    </main> 
  )
}
