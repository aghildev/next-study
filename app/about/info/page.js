import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className ="text-2xl">About Info Page 
    <Link href = "/about" className='block'>About Page</Link>
    </div>
  )
}

export default page