import { SquarePlay } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex  justify-between items-center ps-8 pt-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold capitalize">airPods max</h1>
        </div>
        <div>
          <h1 className="text-6xl font-bold w-[500px]">
            Headphone for Your Daily Life
          </h1>
        </div>
        <div>
          <p className="text-gray-600 w-[440px]">
            The perfect combination of high-fidelity audio and the effortless
            convenience of AirPods. Your most personalized listening experience
            ever.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-3xl capitalize">
              buy now - $139.00
            </button>
          </div>
          <div className="flex items-center gap-3">
            <SquarePlay size={40} className="fill-black text-white" />
            <p className="text-md">
              <span className="font-bold">Watch</span> jorney into Sound
            </p>
          </div>
        </div>
      </div>
      <div className="me-20">
        <Image src="/Images/ovo.jpg" width={500} height={500} alt="AirPods Max" className="object-contain mix-blend-multiply"/>
      </div>
    </div>
  );
}
