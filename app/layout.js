import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning Next js',
  description: 'Created by Aghil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className='text-4xl text-cyan-600'>This is the Navbar</h1>
        {children}
        <h3>This is a footer</h3>
        </body>
    </html>
  )
}
