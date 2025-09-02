import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div >
      <div className="flex justify-between items-center mx-6 mt-8">
          <h1 className="font-bold text-5xl w-[550px]">
            the database for modern applications
          </h1>
        <div className="">
          <div className="flex items-center mb-4 gap-2">
              <button className="bg-[#ebe9db] text-lg rounded-md px-12 py-4">
                Start 14-day trial
              </button>
            <div className="bg-[#ebe9db] p-5 rounded-full">
              <ArrowUpRight />
            </div>
          </div>
            <p className="w-[380px] text-gray-500">
              Hurree centralizes data from your entire tech stack and database
              creating one clear view of performance
            </p>
        </div>
      </div>
      <div className="mx-6 my-10">
        <Image
          src="/Images/banner.png"
          alt="Banner Image"
          className="object-cover rounded-lg w-full"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
