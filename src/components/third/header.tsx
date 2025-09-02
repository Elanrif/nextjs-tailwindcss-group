import { Clock1Icon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <div className="flex items-center gap-24 ps-8 rounded-3xl">
        <div className="flex items-center gap-2 ">
          <Clock1Icon size={30} />
          <h1 className="text-4xl font-bold font-mono">ava</h1>
        </div>
        <div className="flex items-center gap-5 border-2 px-4 rounded-2xl py-2 capitalize">
          <div>home</div>
          <div>products</div>
          <div>about</div>
          <div>contact</div>
        </div>
        <div className="flex bg-black ms-auto ps-5 pb-5 gap-3">
          <div>
            <button className="border-2 border-white bg-black text-white rounded-full px-4 py-2">
              stores
            </button>
          </div>
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
