'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'


const Header = () => {
  const [isnavVisible, setnavVisible] = useState(false)
  
  return (
    <header className='px-4 py-2 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <div className='w-16 p-2 bg-green-50 rounded-full hover:cursor-pointer'>
          <Image src='/logo.png' alt='Logo' width={100} height={100} />
        </div>
        <h2 className='font-semibold'>Dr. Hadad Elian Emir</h2>
      </div>
      <button role='menu' className='hover:border-2 rounded-full p-1 sm:hidden'
        onClick={() => setnavVisible(true)}
      >
        <svg className="icon icon-tabler icon-tabler-menu-deep rounde" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6h16"></path>
          <path d="M7 12h13"></path>
          <path d="M10 18h10"></path>
        </svg>
      </button>
      <nav className='hidden sm:flex gap-4 items-center' >
        <Link href="/" className='hover:text-blue-600 hover:underline font-semibold transition-all ease'>Inicio</Link>
        <Link href="/sobremi" className='hover:text-blue-600 hover:underline font-semibold transition-all ease'>Sobre mi</Link>
        <Link href="/blog" className='hover:text-blue-600 hover:underline font-semibold transition-all ease'>Blog</Link>
        <Link href="/appointments" className='text-green-600 ml-4 border-2 border-green-600 rounded-md p-1 hover:text-blue-600 hover:border-blue-600 transition-all ease' >Agenda</Link>
      </nav>
      { isnavVisible && <Nav setVisibility={setnavVisible} /> }
    </header>
  )
}

export default Header