import { Play, Target } from 'lucide-react'
import React from 'react'
import Image from 'next/image';

export default function page() {
    return (
        <div className='p-10'>
            <div className="flex flex-col gap-10">
                <div className='bg-black rounded-2xl flex justify-between items-center gap-4 p-5'>
                    <div className='flex flex-col grow justify-start items-start border-white rounded-2xl text-lg bg-white p-5'>
                        <div className='w-full h-full'>
                            {/* Header */}
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex justify-between items-center gap-10'>
                                    <div className='flex items-center gap-1 font-bold text-2xl'>
                                        <Target />
                                        <h1>avo</h1>
                                    </div>
                                    <div className='flex justify-between text-sm gap-4 border-1 rounded-3xl px-5 py-2'>
                                        <p>Homme</p>
                                        <p>Product</p>
                                        <p>About</p>
                                        <p>Contact</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-8 text-sm'>
                                    <button className='border-1 rounded-3xl px-5 py-1'>Stores</button>
                                    <button className='border-1 rounded-3xl px-5 py-1'>Contact Us</button>
                                </div>
                            </div>
                            {/* Sous menu */}
                            <div className='flex justify-between items-center gap-10'>
                                <div className='flex flex-col justify-between items-start gap-10 mt-20  w-1/2'>
                                    <p className='font-bold text-2xl'>AirPods MAX.</p>
                                    <p className='font-bold text-6xl'>Headphone for<br />Your Daily Life</p>
                                    <p>The perfect combination of hight-fidelity audio and the <br />
                                        efforties convenience of AirPods. Your most personalized<br />
                                        listening experience ever</p>
                                    <div className='flex justify-between items-center gap-5'>
                                        <button className='text-white bg-black rounded-3xl px-7 py-2 border-2 border-gray-200'>Buy Now -$139.00</button>
                                        <button className='flex justify-between items-center gap-2 '>
                                            <span className='rounded-full p-3 bg-black'><Play size={20} className='text-white'/></span>
                                            <span>watch journey into sound</span>
                                        </button>
                                    </div>
                                    <div className='flex justify-between items-center gap-5 mt-6'>
                                        <p>Follow us</p>
                                        <Image
                                            src="/images/instagram.jpg"
                                            alt="Placeholder"
                                            width={200}
                                            height={200}
                                            className='rounded-full w-10 h-10 object-cover'
                                        />
                                        <Image
                                            src="/images/youtube.jpg"
                                            alt="Placeholder"
                                            width={200}
                                            height={200}
                                            className='rounded-full w-10 h-10 object-cover'
                                        />
                                        <Image
                                            src="/images/pinterest.jpg"
                                            alt="Placeholder"
                                            width={200}
                                            height={200}
                                            className='rounded-full w-10 h-10 object-cover'
                                        />
                                        <Image
                                            src="/images/facebook.jpg"
                                            alt="Placeholder"
                                            width={200}
                                            height={200}
                                            className='rounded-full w-5 h-5 object-cover'
                                        />
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <Image
                                        src="/images/airpods.jpg"
                                        alt="Placeholder"
                                        width={200}
                                        height={200}
                                        className='w-full h-[500px] object-cover'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

