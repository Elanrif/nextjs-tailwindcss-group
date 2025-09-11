import Link from "next/link";
import React from "react";

export default function SubCard() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pb-20">
          <div className="flex items-center gap-10 py-16 text-xs text-stone-400">
      <Link href="#" className="text-black">
        1
      </Link>
      <Link href="#">2</Link>
      <Link href="#">3</Link>
      <Link href="#">4</Link>
      <Link href="#">5</Link>
      <Link href="#" className="uppercase ">suivant</Link>
    </div>
    <div className="flex flex-col gap-1 items-center text-3xl">
      <p className="italic text-stone-500" style={{ fontFamily: "'Dancing Script', cursive" }}>suivre</p>
      <h1 className="" style={{ fontFamily: "'Roboto', sans-serif" }}>#marwa</h1>
    </div>
    </div>
  );
}
