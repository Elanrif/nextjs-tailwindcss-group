import { Facebook, Instagram, Printer, Youtube } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="flex gap-8 ps-8 py-8 ">
      <p className="text-black text-lg">Follow US</p>
      <Instagram size={30} className="fill-black text-white"/>
      <Youtube size={30} className="fill-black text-white"/>
      <Printer size={30} className="fill-black text-white"/>
      <Facebook size={30} className="fill-black text-white"/>
    </div>
  );
}
