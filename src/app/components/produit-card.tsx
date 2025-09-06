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
    <div className='p-4 space-y-4'>
      {/* Soldes & Pourcentage */}
      <div className='justify-between items-center bg-gray-100 p-2 mb-2 w-[350px] '>
        <div className='flex justify-between items-center px-2 mb-2'>
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
      </div>
      {/* Description */}
      <div className='flex border items-center space-y-2'>
        <div className='flex-col items-center'>
          <p className='text-lg font-light uppercase'>{name}</p>
          <div className='flex gap-4 items-center justify-between'>
            {/* Prix */}
            <p className='text-lg font-light line-through text-gray-500'>{oldPrice} MAD</p>
            <p className='text-lg text-red-600'>{newPrice} MAD</p>
        {/* Couleurs */}
        <div className={`size-6 ${color} rounded-full`} />
        </div>
        </div>
      </div>
    </div>
  )
}