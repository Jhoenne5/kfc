import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl text-red-500'>Oopppss!! </h2>
            <p>We could not find the ticket you are looking for</p>
            <Link href="/tickets" className='text-blue-500 underline'>  <p>Go back to Tickets page </p></Link>
    </main>  
  )
}
