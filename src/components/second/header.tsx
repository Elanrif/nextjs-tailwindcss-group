import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between mt-4 mx-8">
      <div className="flex text-md font-bold gap-2">
        <Zap />
        <div className="text-md font-bold">/ Sales@reeles.io</div>
      </div>
      <div className="flex items-center font-bold gap-5">
        <Link href="#">Product </Link>
        <span className="text-xl rounded-full">.</span>
        <Link href="#">Solution</Link>
        <span className="text-xl rounded-full">.</span>
        <Link href="#">Pricing</Link>
        <span className="text-xl rounded-full">.</span>
        <Link href="#">Developpers</Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="border-l-2 h-8 border-gray-300"></div>
        <div className="font-bold">login in</div>
        <div>
          <button className="border-2 rounded-full px-4 py-2">
            <span className="font-bold">Get it Now -- </span>It&#39; Free
          </button>
        </div>
      </div>
    </div>
  );
}
