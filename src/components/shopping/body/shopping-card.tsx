import Image from "next/image";
import React from "react";

export type ShoppingCardProps = {
  percentage: number;
  imageSrc: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  circleColor: string;
};

export default function ShoppingCard({
  percentage,
  imageSrc,
  title,
  oldPrice,
  newPrice,
  circleColor,
}: ShoppingCardProps) {
  return (
    <div className="flex flex-col  py-10">
      <div className="relative">
        <div className="relative">
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt="shopping image1"
            className="w-[500px] h-[500px] object-contain"
          />
        </div>
        <div className="absolute top-30 sm:top-20 md:left-16 left-5 lg:top-4 lg:left-15">
          <p className="text-xs border bg-black w-fit text-white rounded-full p-3">
            soldes
          </p>
        </div>
        <div className="absolute top-80 left-8 md:left-16 lg:top-4 lg:left-75">
          <p className="bg-red-400 text-white border rounded-xs w-fit p-1">
            {" "}
            - {percentage}%
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 ps-11">
        <div className="flex flex-col text-lg gap-3">
          <p className="uppercase">{title}</p>
          <div className="flex gap-4 ">
            <p className="line-through text-stone-400">{oldPrice} MAD</p>
            <p className="text-red-400">{newPrice} MAD</p>
          </div>
        </div>
        <div className="me-12">
          <p className={`border text-3xl p-4 rounded-full bg-${circleColor}-400`}></p>
        </div>
      </div>
    </div>
  );
}
