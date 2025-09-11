import {
  Heart,
  Mail,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col bg-white sticky z-50 top-0">
      <div className="flex justify-between items-center py-3 border-b-1 border-gray-300">
        <p className="ps-6 capitalize text-xs text-stone-500">
          langue : français
        </p>
        <p className="uppercase text-stone-500">
          Livraison offerte à partir de 500 DHS
        </p>
        <Link href="#" className="flex items-center gap-2 pe-6 text-stone-700">
          <Mail size={15} />
          <p className="capitalize text-xs text-stone-500">service client</p>
        </Link>
      </div>
      <div className="flex justify-between items-center py-5 border-b-1 border-gray-300">
        <Link href="#" className="ps-6 font-serif text-5xl">
          marwa
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-xl text-stone-700">
          <Link href="#">Nouveautés</Link>
          <Link href="#">E-shop</Link>
          <Link href="#">À propos</Link>
        </div>
        <div className="flex items-center gap-5 pe-6">
          <Link href="#" className="hidden lg:block">
            <Search size={18} />
          </Link>
          <Link href="#" className="hidden lg:block">
            <Heart size={18} />
          </Link>
          <Link href="#">
            <UserRound size={18} />
          </Link>
          <Link className="relative" href="#">
            <ShoppingBag size={18} />
            <span
              className="absolute text-sm top-1.5 left-2.5 border px-[5px] rounded-full bg-red-300"
            >
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
