import { Triangle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SubHeader() {
  return (
    <div className="flex flex-col pt-4 ps-6">
      <div className="flex gap-2 uppercase text-sm text-stone-500">
        <Link href="#">acceuil</Link>
        <span>/</span>
        <Link href="#">e-shop</Link>
        <span>/</span>
        <Link href="#">vêtements</Link>
      </div>
      <div className="flex justify-center pt-10">
        <p className="text-6xl uppercase">Vêtements</p>
      </div>
      <div className="flex flex-col sm:flex-col gap-3 lg:flex-row lg:justify-between pt-10 pe-10">
        <p className="font-semibold font-sans text-md uppercase ">1712 Produits affichés</p>
        <div className="flex items-center gap-8 text-xs text-stone-500 capitalize">
          <Link href="#" className="hidden lg:flex items-center gap-3 ">
            catégories
            <Triangle size={9} className="fill-black scale-y-[-1]" />
          </Link>
          <Link href="#" className="hidden lg:flex items-center gap-3">
            tailles
            <Triangle size={9} className="fill-black scale-y-[-1]" />
          </Link>
          <Link href="#" className="hidden lg:flex items-center gap-3">
            couleur
            <Triangle size={9} className="fill-black scale-y-[-1]" />
          </Link>
          <Link href="#" className="flex items-center gap-3">
            trier par :<span className="me-6">position</span>
            <Triangle size={9} className="fill-black scale-y-[-1]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
