import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className='text-center'>
   <h1 className='text-3xl font-bold'>Next JS</h1>
   <Link href = "/about" className='text-2xl text-fuchsia-900 font-extrabold'>Get Started</Link>
   </div>
  )
}
