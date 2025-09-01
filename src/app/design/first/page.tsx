import React from 'react'

export default function page() {
  return (
     <div className='relative h-[500px] bg-gray-200 flex justify-between items-center gap-4 px-10 mt-10 mx-10'>
        <div className='absolute inset-x-20 top-5'>
          <div className='flex justify-between items-center border-white px-10 py-4 rounded-2xl text-lg font-bold bg-white h-[400px]'>
          <h1 className='text-6xl font-bold'>heexo</h1>
          <div className='text-sm flex justify-between gap-5 text-gray-400'>
            <p>Why heexo?</p>
            <p>Plateform</p>
            <p>Solution</p>
            <p>Changelog</p>
          </div>
        <button className='border-1 bg-gray-100 text-black px-10 py-4 rounded-2xl text-lg font-bold'>Book a demo</button>
       </div>
        </div>
        <div className='absolute inset-x-20 top-60'>
            <div className="flex flex-colflex justify-between gap-100 px-10 py-4 items-center h-[200px] rounded-xl">
              <h1 className="text-4xl font-semibold">The database for modern applications</h1>
              <div>
                <button className='border-1 bg-gray-100 text-black px-10 py-4 rounded-2xl text-lg font-bold'>Start 14-days trial</button>
                <p>Hurre centralizes data from your entire tech stack and database creating one clear view of performace.</p>
            </div>
            </div>
        </div>
       </div>
    
    
  )
}
