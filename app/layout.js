import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning Next js',
  description: 'Created by Aghil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
        {children}
        <h3>This is a footer</h3>
        </body>
    </html>
  )
}
