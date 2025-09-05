import { ChevronDown, Handbag, Heart, Mail, Search, UserRound } from 'lucide-react';
import React from 'react';
import ProduitCard from '@/app/components/produit-card';

const products = [
    {
        pourcentage: 74,
        imageUrl: "/images/grid-image/chemise.jpg",
        name: 'Chemise Portefeuille',
        oldPrice: 120,
        newPrice: 90,
        color: 'bg-white'
    },
    {
        pourcentage: 50,
        imageUrl: "/images/grid-image/menteau2.jpg",
        name:'Manteau Classique',
        oldPrice: 200,
        newPrice: 100,
        color: 'bg-amber-900'
    },
    {
        pourcentage: 30,
        imageUrl: "/images/grid-image/menteau1.jpg",
        name: 'Manteau Long',
        oldPrice: 180,
        newPrice: 126,
        color:'bg-black'
    },
    {
        pourcentage: 65,
        imageUrl: "/images/grid-image/jean1.jpg",
        name: 'Jean Taille Haute',
        oldPrice: 150,
        newPrice: 75,
        color: 'bg-blue-950'
    },
    {
        pourcentage: 24,
        imageUrl: "/images/grid-image/jean2.jpg",
        name: 'ean blue',
        oldPrice: 130,
        newPrice: 98,
        color: 'bg-blue-950'
    },
    {
        pourcentage: 45,
        imageUrl: "/images/grid-image/jupe2.jpg",
        name:'Jupe longue',
        oldPrice: 150,
        newPrice:82,
        color: 'bg-blue-500'
    },
    {
        pourcentage: 15,
        imageUrl: "/images/grid-image/robe1.jpg",
        name:'Robe patineuse',
        oldPrice: 80,
        newPrice: 68,
        color: 'bg-black'
    },
    {
        pourcentage: 38,
        imageUrl: "/images/grid-image/robe2.jpg",
        name: 'Robe Longue noire',
        oldPrice: 220,
        newPrice: 136,
        color: 'bg-black'
    },
]
export default function page() {
    return (
        <div className='relative px-10 space-y-4'>
            {/* Header */}
            <div className='fixed top-0 left-0 right-0 bg-white px-10 z-50 shadow-sm'>
                <div className='flex justify-between items-center text-sm font-light py-2'>
                    <p>Langue:Français</p>
                    <p className='text-md font-normal'>RETOUR GRATUIT POUR TOUTE COMMANDE</p>
                    <div className='flex gap-2 items-center'>
                        <Mail size={15} />
                        <span>Service Client</span>
                    </div>
                </div>
                <div className='border-1 border-gray-200' />
                <div className='flex justify-between items-center py-4'>
                    <h1 className='text-4xl font-bold '> marwa </h1>
                    <div className='text-2xl flex justify-between gap-14'>
                        <p>Nouveautés</p>
                        <p>E-shop</p>
                        <p>À propos</p>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <Search size={18} />
                        <Heart size={18} />
                        <UserRound size={18} />
                        <Handbag size={18} />
                    </div>
                </div>
            </div>
            {/* Sou menu */}
            <div className=''>
                <p className='flex items-start px-4 mt-30'>Accueil / E-shop / Nouveautés</p>
                <p className='text-center text-6xl uppercase mt-5'>Vêtements</p>
                <div className='flex justify-between items-center mt-15'>
                    <span className='text-sm font-bold uppercase'>1818 Produits affichés
                    </span>
                    <div className='flex gap-6 items-center text-sm'>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Taille <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Couleur <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'>Trier par: <span className='font-bold pl-2'> Position</span> <ChevronDown size={18} fill='black' /></p>
                    </div>
                </div>
            </div>
            {/* Grid */}
            <div className='grid grid-cols-3 gap-4 my-10'>
                {products.map((item, index) => (
                    <div key={index}>
                        <ProduitCard
                            pourcentage={item.pourcentage}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                            color={item.color}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
