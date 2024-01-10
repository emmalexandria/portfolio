'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [themeText, setThemeText] = useState("")

  useEffect(() => {
    if(currentTheme != undefined) {
      setThemeText(currentTheme)
    }
  }, [theme])

  return (
    <div className='w-full text-light-900 dark:text-dark-950'>
      <button className='bg-dark-950 dark:bg-light-800 font-mono font-bold mx-auto uppercase mx-auto w-fit block px-2 py-1 rounded-b-xl'  onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>{themeText}</button>
    </div> 
  )
}