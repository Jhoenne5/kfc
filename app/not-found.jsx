import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl text-red-500'>There was a problem. </h2>
            <p>We could not find the page you are looking for</p>
            <Link href="/" className='text-blue-500 underline'>  <p>Go back to the dashboard </p></Link>
    </main>  
  )
}
