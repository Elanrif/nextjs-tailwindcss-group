import { ChevronDown, Handbag, Heart, Mail, Search, UserRound } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='px-10 space-y-4'>
            {/* Header */}
            <div className=''>
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
                <div className='border-1 border-gray-100' />
            </div>
            {/* Sou menu */}
            <div className=''>
                <p className='flex items-start px-4 mt-4'>Accueil / E-shop / Nouveautés
                </p>
                <p className='text-center text-6xl uppercase mt-5'>Vêtements
                </p>
                <div className='flex justify-between items-center mt-10'>
                    <span className='text-sm font-bold uppercase'>1818 Produits affichés
                    </span>
                    <div className='flex gap-6 items-center text-sm'>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black'/> </p>
                        <p className='flex items-center'> Taille <ChevronDown size={18} fill='black'/> </p>
                        <p className='flex items-center'> Couleur <ChevronDown size={18} fill='black'/> </p>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black'/> </p>
                        <p className='flex items-center'>Trier par: <span className='font-bold pl-2'> Position</span> <ChevronDown size={18} fill='black'/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
