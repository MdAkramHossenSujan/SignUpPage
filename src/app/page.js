import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center h-screen flex-col gap-5'>
        <h1 className='font-bold text-3xl'>Hello,Below is the link of the Sign Up page.</h1>
        <Link className='border-b-2 italic' href={'/signup'}>Sign Up</Link>
      </div>
    </>
  );
}
