'use client'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface Props {
  setVisibility:Dispatch<SetStateAction<boolean>>
}

const Nav = ({ setVisibility }: Props) => {
  useEffect(() => {
    const changeScreenWidth = ():void => {
      if (window.screen.width > 640) {
        setVisibility(false)
      }
    }
    window.addEventListener('resize', changeScreenWidth)
    return () => {
      window.removeEventListener('resize', changeScreenWidth)
    }
  }, [setVisibility])
  return (
    <div>
      <nav className='h-screen w-1/2 bg-green-700 flex flex-col gap-4 items-start absolute top-0 right-0 p-10 justify-center shadow-lg' >
        <a href="/" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Inicio</a>
        <a href="/sobremi" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Sobre mi</a>
        <a href="/blog" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Blog</a>
        <a href="/turno" className='w-full block text-green-950 border-2 border-green-950 rounded-md p-1 mt-2 text-center hover:text-blue-900 hover:border-blue-900 transition-all ease' >Agenda</a>
        <button className='hover:border-2 rounded-full absolute top-4 left-4'
          onClick={() => setVisibility(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Nav