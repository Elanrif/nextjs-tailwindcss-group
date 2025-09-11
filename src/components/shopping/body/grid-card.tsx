import React from "react";
import ShoppingCard, { ShoppingCardProps } from "./shopping-card";

// Data array with 9 elements for ShoppingCard
export const shoppingCardData: ShoppingCardProps[] = [
  {
    percentage: 20,
    imageSrc: "/Images/shopping/image1.jpg",
    title: "Jordan 1",
    oldPrice: 2000,
    newPrice: 1600,
    circleColor: "red",
  },
  {
    percentage: 15,
    imageSrc: "/Images/shopping/image2.jpg",
    title: "Disney Tee",
    oldPrice: 400,
    newPrice: 340,
    circleColor: "blue",
  },
  {
    percentage: 10,
    imageSrc: "/Images/shopping/image3.jpg",
    title: "NCR Hoodie",
    oldPrice: 800,
    newPrice: 720,
    circleColor: "gray",
  },
  {
    percentage: 25,
    imageSrc: "/Images/shopping/image4.jpg",
    title: "OVO Cap",
    oldPrice: 600,
    newPrice: 450,
    circleColor: "amber",
  },
  {
    percentage: 30,
    imageSrc: "/Images/shopping/image5.jpg",
    title: "Rakuten Jersey",
    oldPrice: 1200,
    newPrice: 840,
    circleColor: "emerald",
  },
  {
    percentage: 18,
    imageSrc: "/Images/shopping/image6.jpg",
    title: "Women Dress",
    oldPrice: 900,
    newPrice: 738,
    circleColor: "rose",
  },
  {
    percentage: 12,
    imageSrc: "/Images/shopping/image7.jpg",
    title: "Women Top",
    oldPrice: 500,
    newPrice: 440,
    circleColor: "orange",
  },
  {
    percentage: 22,
    imageSrc: "/Images/shopping/image8.jpg",
    title: "Banner Shirt",
    oldPrice: 700,
    newPrice: 546,
    circleColor: "sky",
  },
  {
    percentage: 17,
    imageSrc: "/Images/shopping/image9.jpg",
    title: "Mondaycom Tee",
    oldPrice: 350,
    newPrice: 290,
    circleColor: "cyan",
  },
];

export default function GridCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
      {shoppingCardData.map((card, index) => (
        <div key={index}>
          <ShoppingCard {...card}/>
        </div>
      ))}
    </div>
  );
}
