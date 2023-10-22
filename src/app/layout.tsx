import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { Providers } from './providers'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medical Appointment',
  description: 'Landing and Medical Appointment for Dr. Hadad Elian',
  icons: '/logo.png'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
        <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-blue-950 min-h-screen`} >
          <Providers>
            <Header />
            {children}
            <Footer />
         </Providers>
          </body>
    </html>
  )
}
