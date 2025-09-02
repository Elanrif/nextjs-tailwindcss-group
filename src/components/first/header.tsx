import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4 mx-4 mt-5">
      <div className="flex flex-row items-center gap-1">
        <Image src="/Images/images.png" width={50} height={50} alt="Logo" />
        <h1 className="font-extrabold text-3xl">heexo</h1>
      </div>
      <div className="flex flex-row items-center text-gray-500 gap-12">
        <Link href="#">Why heexo</Link>
        <Link href="#">Platform</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Changelog</Link>
      </div>
      <button className="bg-stone-200 rounded-2xl px-5 py-3">Book a demo</button>
    </div>
  );
}
