import React from 'react'
import { ArrowUpRight, Check, Flower, Play, Star, Zap } from 'lucide-react'
import Image from 'next/image';

export default function page() {
  return (
    <div className='p-10 space-y-8'>
      {/* Header */}
      <div className='flex justify-between items-center bg-white px-10 py-4 rounded-2xl'>
        <div className='flex text-sm font-bold gap-2 items-center'>
          <Zap size={20} fill='black' />
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
          <div className='flex gap-3 font-bold items-center'>
            <Flower size={40} className='rounded-full border-1 bg-black text-white' />
            <div>
              <h1>20M+ User</h1>
              <p className='text-sm font-normal'>
                Read Our <span className='font-bold underline'>Success Stories</span>
              </p>
            </div>
          </div>
          <p className='text-9xl font-bold'>Grow+</p>
          <div className='border-b-1 text-gray-500' />
          <div className=' m-1'>
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
              <div className='flex items-center text-sm'>
                <p className=''>
                  Loved the performance<br />
                  100% Satisfied
                </p>
                <p className='flex items-center gap-2 font-bold p-5'>
                  / <Star size={15} fill='black' />
                  <span>4.9</span>
                </p>
              </div>
            </div>
          </div>
          <div className='border-b-1 text-gray-500' />
          <div className='flex items-center gap-5'>
            <button className='border-1 bg-black text-white p-3 rounded-4xl text-xs font-bold'>Get it Now <span className='font-normal'>- it&apos;s Free</span></button>
            <button className='flex items-center gap-2 font-bold border-white border p-3 rounded-full '>
              <span className='text-sm font-bold '>Our Pricing</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
        <div className='relative space-y-10'>
          <div className='flex justify-center items-center py-20 px-40'>
            <div className='absolute border-1 rounded-full bg-white justify-center p-3'>
            <Play size={20} fill='black'/>
            </div>
            <Image
              src="/images/fitness.jpg"
              alt="Placeholder"
              width={200}
              height={200}
              className='rounded-4xl w-full h-[400px] object-cover'
            />
            <div className='absolute left-30 top-30 flex text-sm items-center gap-2  rounded-full px-3 py-2 bg-white w-40 mt-5 '>
              <Check size={20} className='border-1 rounded-md bg-amber-600' />
              <p>
                How is the fit?
              </p>
            </div>
            <div className='absolute left-20 top-40 flex text-sm items-center gap-2  rounded-full px-3 py-2 bg-white w-[200px] mt-5 '>
              <Check size={20} className='border-1 rounded-md bg-blue-500' />
              <p>
                Do you like the disign?
              </p>
            </div>
            <div className='absolute flex-col right-20 top-30 text-sm gap-2 rounded-2xl px-3 py-2 bg-white/30'>
              <p className='text-sm'>&mdash;UP TO </p>
              <p className='text-base font-bold mt-2'>
                60%
              </p>
              <span> More sales this<br />week</span>
            </div>
            <div className='absolute flex justify-between right-15 bottom-25 text-sm items-center gap-2 rounded-2xl px-3 py-1 bg-white/30 '>
              <div>
                <Image
                  src="/images/basket.jpg"
                  alt="Placeholder"
                  width={200}
                  height={200}
                  className='rounded-3xl w-[90px] h-[90px] object-cover p-3'
                />
              </div>
              <div className='text-sm px-5 py-1.5 mt-2'>
                <span> Nike Shoes<br />jordan</span>
                <div className='text-base font-bold mt-1'>
                  $849.99
                  <p className='flex justify-center items-center bg-white rounded-full gap-1 mt-1'>
                    <Star size={12} fill='black' />
                    <span className='text-sm'>4.9</span>
                  </p>
                </div>
              </div>
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
