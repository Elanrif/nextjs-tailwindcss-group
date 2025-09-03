import React from 'react'
import { ArrowUpRight, Check, Flower, Zap } from 'lucide-react'
import Image from 'next/image';

export default function page() {
  return (
    <div className='p-10 space-y-8'>
      {/* Header */}
      <div className='flex justify-between items-center bg-white px-10 py-4 rounded-2xl'>
        <div className='flex text-sm font-bold gap-2 items-center'>
          <Flower size={20} />
          <h1>/Sales@reelers.io</h1>
        </div>
        <div className='text-sm flex justify-between gap-12 font-bold'>
          <p>Product</p>
          <p>Solution</p>
          <p>Pricing</p>
          <p>Developers</p>
        </div>
        <div className='flex justify-between text-sm font-bold gap-8 items-center'>
          <p>Log in</p>
          <button className='border-1 rounded-3xl px-5 py-2'>Get it Now <span className='font-normal'>- it&apos;s Free</span></button>
        </div>
      </div>
      {/* Sous menu */}
      <div className="flex flex-row bg-gray-300 justify-between p-10 items-start gap-20 h-[700px] rounded-xl">
        <div className='flex flex-col text-2xl space-y-10 '>
          <div className='flex gap-5 font-bold'>
            <Zap size={40} />
            <div>
              <h1>20M+ User</h1>
              <p>
                Read Our Success Stories
              </p>
            </div>
          </div>
          <div>
            <p className='text-9xl font-bold'>Grow+</p>
          </div>
          <div className='border-b-1 text-gray-500' />
          <div>
            <p className='text-lg'>
              Drive Sales Growth,And Harness Ai-powered User <br />
              Content&mdash;Up To 50&times; Faster.
            </p>
            <div className='flex items-center gap-4 mt-5'>
              <Image
                src="/images/fille.jpg"
                alt="Placeholder"
                width={200}
                height={200}
                className='rounded-full w-10 h-10 object-cover'
              />
              <p className='text-sm'>
                Loved the performance<br />
                100% Satisfied
              </p>
            </div>
          </div>
          <div className='border-b-1 text-gray-500' />
          <div className='flex items-center gap-5'>
            <button className='border-1 bg-black text-white px-4 py-4 rounded-4xl text-xs font-bold'>Get it Now - it&apos;s Free</button>
            <button className='flex items-center gap-2 font-bold border-white border p-4 rounded-full '>
              <span className='text-sm font-bold '>Our Pricing</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
        <div className='relative border-1 space-y-10'>
          <div className='flex justify-center items-center py-20 px-40'>
            <Image
              src="/images/fitness.jpg"
              alt="Placeholder"
              width={200}
              height={200}
              className='rounded-4xl w-full h-[400px] object-cover'
            />
            <div className='absolute left-30 top-40 flex text-sm items-center gap-2  rounded-full px-3 py-2 bg-white w-40 mt-5 '>
              <Check size={20} className='border-1 rounded-md bg-amber-600' />
              <p>
                How is the fit?
              </p>
            </div>
            <div className='absolute left-20 top-50 flex text-sm items-center gap-2  rounded-full px-3 py-2 bg-white w-[200px] mt-5 '>
              <Check size={20} className='border-1 rounded-md bg-blue-500' />
              <p>
                Do you like the disign?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer*/}
      <div className='flex justify-evenly items-center font-bold'>
        <Image
          src="/images/Rakuten.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded w-20 h-[30px] object-cover'
        />
        <Image
          src="/images/ncr.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded w-30 h-[30px] object-cover'
        />
        <Image
          src="/images/monday.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded w-30 h-[30px] object-cover'
        />
        <Image
          src="/images/Disney.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded w-20 h-[30px] object-cover'
        />
        <Image
          src="/images/Dropbox.jpg"
          alt="Placeholder"
          width={200}
          height={200}
          className='rounded w-30 h-[30px] object-cover'
        />
      </div>
    </div>

  )
}
