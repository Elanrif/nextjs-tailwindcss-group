import { ArrowUpRight, Check, CheckCheck, Plus, Star, View } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-between items-center mt-6 mx-8 bg-[#c6c3c3] rounded-lg p-6">
      <div className="flex flex-col w-1/2 gap-y-6 ps-9 pt-5">
        <div className="flex items-center gap-3">
          <div className="p-4 rounded-full bg-black text-white font-bold">
            <View />
          </div>
          <div>
            <h1 className="text-xl font-bold">20M+ Users</h1>
            <p className="capitalize ">
              read our{" "}
              <span className="text-md font-bold underline">
                success stories
              </span>
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="text-8xl font-serif font-semibold capitalize">
            grow
          </span>
          <p className="">
            <Plus />
          </p>
        </div>
        <div className="capitalize text-serif border-t-2 pt-5 border-gray-400 w-[420px]">
          drive sales growth, and harness ai-powered user content - up to 50x
          faster
        </div>
        <div className="flex items-center gap-2 border-b-2 border-gray-400 w-[420px] pb-5">
          <div>
            <Image
              src="/Images/women.jpg"
              width={50}
              height={50}
              alt="Women"
              className="rounded-full h-11 w-10"
            />
          </div>
          <div className="w-[200px] text-serif">
            Loved the performance 100% Satisfied
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-black text-xl">/</span>
            <Star className="fill-black " />
            <span>4.9</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-black px-5 py-4 rounded-full">
            <button className="">
              <span className="text-white font-bold font-serif">Download</span>{" "}
              <span className=" text-stone-300">-- It&apos;s Free</span>
            </button>
          </div>
          <div className="flex items-center font-bold gap-2">
            <span className="underline capitalize">our pricing</span>
            <ArrowUpRight />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="">
          <Image
            src="/Images/women4.jpg"
            width={400}
            height={500}
            alt="AfricanWomen"
            className="object-cover rounded-3xl me-35  h-[400px] w-[320px]"
          />
        </div>
        <div className="flex absolute top-14 -left-27 rounded-3xl px-4 py-2 bg-white text-black w-[200px] ">
          <Check className="border p-1 rounded-lg bg-orange-400" />
          <p className="ps-4">How is the fit ?</p>
        </div>
        <div className="flex items-center absolute top-26 -left-42 rounded-3xl px-4 py-1 bg-white text-black w-[260px] ">
          <Check className="border p-1 rounded-lg bg-blue-400 " size={32} />
          <p className="ps-4">Do you like the design ?</p>
        </div>
      </div>
    </div>
  );
}
