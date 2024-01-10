'use client'

import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if(theme == 'dark') {
      setTheme('light')
      return
    }
    setTheme('dark')
  }

  return (
    <div className='w-full text-light-900 dark:text-dark-950'>
      <button className='bg-dark-950 dark:bg-light-800 font-mono font-bold mx-auto uppercase mx-auto w-fit block px-2 py-1 rounded-b-xl' onClick={toggleTheme}>{theme}</button>
    </div>
  )
}