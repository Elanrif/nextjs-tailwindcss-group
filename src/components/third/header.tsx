import { Clock1Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <div className="flex items-center gap-24 ps-8 rounded-3xl">
        <div className="flex items-center gap-2 ">
          <Clock1Icon size={30} />
          <h1 className="text-4xl font-bold font-mono">ava</h1>
        </div>
        <div className="flex items-center gap-12 border-2 px-10 rounded-full py-3 capitalize">
          <Link href="#">home</Link>
          <Link href="#">products</Link>
          <Link href="#">about</Link>
          <Link href="#">contact</Link>
        </div>
        <div className="flex bg-black ms-auto ps-5 pb-5 gap-3">
          <button className="border-2 border-white bg-black text-white rounded-full px-4 py-2">
            stores
          </button>
          <div>
            <button className="border bg-stone-100 text-black capitalize rounded-full px-4 py-2">
              contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
