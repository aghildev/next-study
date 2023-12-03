import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <h1 className='text-3xl'>Home Page</h1>
   <Link href = "/about" className='text-2xl text-fuchsia-900'>About Page</Link>
   </>
  )
}
