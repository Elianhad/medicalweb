import Nav from './Nav'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='p-4 flex flex-col items-center justify-center'>
      <nav className='flex items-center justify-center gap-2 p-4 shadow mt-4 container max-w-lg mx-auto'>
       <Link href="/" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Inicio</Link>
        <Link href="/sobremi" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Sobre mi</Link>
        <Link href="/blog" className='hover:text-blue-900 hover:underline font-semibold transition-all ease'>Blog</Link>
      </nav>
      <div>
        <p className='text-sm'>Creado por ElianEmir | Todos los derechos reservados©️</p>
      </div>
    </footer>
  )
}

export default Footer