import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <div className='relative h-[800px] bg-gray-200 flex justify-between items-center gap-4 px-10 mt-10 mx-10'>
      <div>
        <Image
          src="/images/internet.jpg"
          alt="Placeholder"
          width={400}
          height={400}
        />
      </div>
      <div className='absolute inset-x-20 top-5'>
        <div className='flex justify-between items-center border-white px-10 py-4 rounded-2xl text-lg font-bold bg-white h-[700px]'>
        <h1 className='text-2xl font-bold'>/Sales@reelers.io</h1>
        <div className='text-sm flex justify-between gap-12 font-bold'>
          <p>Product</p>
          <p>Solution</p>
          <p>Pricing</p>
          <p>Developers</p>
        </div>
        <p>Log in</p>
        <button className='border-1 bg-gray-100 text-black px-10 py-4 rounded-2xl text-lg font-bold'>Get it Now - it&apos;s Free</button>
        <div className="mt-60 flex justify-center gap-5">
        <p>Rakuten</p>
        <p>Témoignages</p>
        <p>NCR</p>
        <p>Fonctionnalité</p>
        <p>monday</p>
        <p>Disney</p>
        <p>Dropbox</p>
      </div>
      </div>
     <div className='absolute inset-x-20 -bottom-40'>
        <div className="flex flex-col bg-gray-400 justify-center items-center h-[300px] rounded-xl">
            <h1 className="text-4xl font-semibold">20M+User</h1>
            <p>Lancer votre entreprise en ligne aujourd&apos;hui</p>
          </div>
      </div>
      </div>
    </div>
    </div>
   
  )
}
