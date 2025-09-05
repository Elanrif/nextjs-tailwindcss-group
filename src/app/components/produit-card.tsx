import React from 'react';
import Image from 'next/image';

export type ShoppingCardProps = {
  pourcentage: number;
  imageUrl: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  color?: string;
};

export default function ProduitCard(
  { pourcentage,
    imageUrl,
    name,
    oldPrice,
    newPrice,
    color
  }: ShoppingCardProps
) {

  return (
    <div className='border border-gray-200 p-4 space-y-4 bg-gray-100 w-[350px]'>
      {/* Soldes & Pourcentage */}
      <div className='flex justify-between items-center'>
        <div className="flex justify-center items-center bg-black text-sm text-white size-12 rounded-full">
          <p>soldes</p>
        </div>
        <p className="p-1 h-fit bg-red-600 text-white">{pourcentage}%</p>
      </div>
      {/* Image */}
      <Image
        src={imageUrl}
        alt="Placeholder"
        width={500}
        height={500}
        className="w-full h-100 object-contain"
      />
      {/* Description */}
      <div className='flex justify-between items-center space-y-2'>
        <div className='flex-col items-center'>
          <p className='text-lg font-light uppercase'>{name}</p>
          <div className='flex gap-4 items-center '>
            <p className='text-lg font-light line-through text-gray-500'>{oldPrice} DH</p>
            <p className='text-lg text-red-600'>{newPrice} DH</p>
          </div>
        </div>
        {/* Couleurs */}
        <div className={`size-6 ${color} rounded-full ms-auto mt-auto`} >
        </div>
      </div>
    </div>
  )
}