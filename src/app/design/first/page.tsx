import { ArrowUpRight, Box, Layers, Shield } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div className='p-10 space-y-20'>
            {/* Header */}
            <div className='flex justify-between items-center bg-white px-10 py-4 rounded-2xl'>
                <div className='flex text-sm font-bold gap-2 items-center'>
                    <Layers size={40} />
                    <h1 className='text-2xl font-bold'> Heexo </h1>
                </div>
                <div className='text-sm flex justify-between gap-12 text-gray-400'>
                    <p>why heexo? </p>
                    <p>Plateform</p>
                    <p>Solutions</p>
                    <p>Changlog</p>
                </div>
                <div>
                    <button className='text-black bg-white rounded-lg border-1 px-7 py-2 border-gray-400'>Book a demo</button>
                </div>
            </div>
            {/* Sous menu */}
            <div className='flex flex-row justify-between items-center gap-10'>
                <p className='font-bold text-6xl'>The database for<br />modern applications</p>
                <div className='space-y-5'>
                    <div className='flex items-center gap-5'>
                        <button className='text-black bg-amber-50 rounded-lg px-10 py-4 border-2 border-gray-200'>Start 14-day trial</button>
                        <div className='p-5 bg-amber-50 rounded-full border-2  border-gray-200'>
                        <ArrowUpRight size={24} strokeWidth={1}/>
                        </div>
                    </div>
                    <div className='text-gray-400'> Hurree centralizes data from your entire tech stack <br /> anddatabase creating one clear view of performance</div>
                </div>
            </div>
            {/* Image */}
            <div>
                <div className='flex justify-center items-center rounded-xl'>
                    <Image
                        src="/images/internet.jpg"
                        alt="Placeholder"
                        width={200}
                        height={200}
                        className='rounded-xl w-full h-[300px] object-cover'
                    />
                </div>
            </div>
            {/* Footer */}
            <div className='flex flex-row justify-between items-center gap-10'>
                <div className='space-y-3'>
                    <div className='flex gap-5'>
                        <div className='bg-orange-50 p-5 h-[80px] rounded-2xl'>
                            <Box size={40} className='text-orange-300' />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-2xl font-bold'>
                                Use Database<br />with your stack
                            </p>
                            <p className='text-gray-500 '>we offer client and server libraries in everything<br />
                                from React and Ruby to iOS</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='flex gap-5'>
                        <div className='bg-orange-50 p-5 h-[80px] rounded-2xl'>
                            <Shield size={40} className='text-orange-300  ' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>
                                Security<br />& privacy
                            </p>
                            <p className='text-gray-500'>Database supports Pll data encrypted with<br />
                                AES-256 at rest or explicit user consent flows
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
