import { ChevronDown, Handbag, Heart, Mail, Menu, Search, UserRound } from 'lucide-react';
import React from 'react';
import ProduitCard from '@/app/components/produit-card';
import Image from 'next/image';

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
        name: 'Manteau Classique',
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
        color: 'bg-black'
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
        name: 'Jupe longue',
        oldPrice: 150,
        newPrice: 82,
        color: 'bg-blue-500'
    },
    {
        pourcentage: 15,
        imageUrl: "/images/grid-image/robe1.jpg",
        name: 'Robe patineuse',
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
        <div className='relative space-y-4'>
            {/* Header */}
            <div className='sticky top-0 left-0 right-0 bg-white px-4 z-50 shadow-sm'>
                <div className='justify-between hidden lg:flex items-center text-sm py-2'>
                    <p className="font-thin text-black/90">Langue:Français</p>
                    <p className='text-md font-thin text-black/70'>RETOUR GRATUIT POUR TOUTE COMMANDE</p>
                    <div className='flex gap-2 items-center'>
                        <Mail size={14} className='text-black/90' />
                        <span className="font-thin text-black/90">Service Client</span>
                    </div>
                </div>
                <div className='border-1 border-gray-200' />
                {/* sub-Header */}
                <div className='hidden lg:flex justify-between items-center py-4'>
                    <h1 className='text-4xl font-bold'> marwa </h1>
                    <div className='flex text-2xl gap-14 font-thin text-black/70'>
                        <p>Nouveautés</p>
                        <p>E-shop</p>
                        <p>À propos</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Search size={18} />
                        <Heart size={18} />
                        <UserRound size={18} />
                        <Handbag size={18} />
                    </div>
                </div>
                {/* Mobile Header */}
                <div className='flex lg:hidden justify-evenly items-center text-sm py-2'>
                    <p className='text-md font-thin text-black/70'>RETOUR GRATUIT POUR TOUTE COMMANDE</p>
                </div>
                <div className='border-1 border-gray-200' />
                {/* Mobile sub-Header */}
                <div className='flex lg:hidden justify-evenly items-center py-4'>
                    <Menu size={24} />
                    <Search size={18} />
                    <h1 className='text-4xl font-bold'> marwa </h1>
                    <div className='flex gap-4 items-center'>
                        <Heart size={18} />
                        <Handbag size={18} />
                    </div>
                </div>
            </div>
            {/* Section */}
            <div className='hidden lg:flex'>
                <p className='flex items-start px-4 mt-6'>Accueil / E-shop / Nouveautés</p>
                <p className='text-center text-6xl uppercase mt-5'>Vêtements</p>
                <div className='flex justify-between items-center mt-15'>
                    <p className='text-sm px-6 font-bold uppercase'>1818 Produits affichés</p>
                    <div className='flex gap-6 items-center text-sm'>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Taille <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Couleur <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'> Catégorie <ChevronDown size={18} fill='black' /> </p>
                        <p className='flex items-center'>Trier par: <span className='font-bold pl-2'> Position</span> <ChevronDown size={18} fill='black' /></p>
                    </div>
                </div>
            </div>
            {/* Mobile Section */}
            <div className='flex lg:hidden'>
                <p className='flex items-start px-4 mt-6'>Accueil / E-shop / Nouveautés</p>
                <p className='text-center text-6xl uppercase mt-5'>Vêtements</p>
                <div className='items-start mt-15'>
                    <span className='text-sm px-6 font-bold uppercase'>1818 Produits affichés
                    </span>
                    <div className='flex gap-6 items-center text-sm'>
                        <p className='flex items-center'>Trier par: <span className='font-bold pl-2'> Position</span> <ChevronDown size={18} fill='black' /></p>
                    </div>
                </div>
            </div>
            {/* Grid */}
            <div className='hidden lg:grid grid-cols-2 gap-3 p-4 mx-auto w-fit my-10 lg:grid-cols-3 '>
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
            {/* Mobile Grid */}
            <div className='grid grid-cols-2 gap-3 p-4 mx-auto w-fit my-10 lg:grid-cols-3 border-3 lg:hidden'>
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
            {/* Footer */}
            <div className='justify-between items-start bg-red-300 px-5 gap-40 py-10 text-white hidden lg:flex'>
                <div className='flex flex-col space-y-4 text-sm'>
                    <h1 className="text-base">NEWSLETTER</h1>
                    <p className="flex text-sm bg-black h-10">
                        <span className="bg-white text-gray-300 flex-3 flex items-center px-2">
                            Adresse email
                        </span>
                        <span className="flex-1 flex items-center px-4 py-2 justify-center text-white">
                            S&apos;INSCRIRE
                        </span>
                    </p>
                    <p className='flex flex-col space-y-2 text-sm'>inscrivez-vous pour recevoir des e-mails peu fréquents sur les offre <br />
                        spéciales et les nouveautés
                    </p>
                    <span>RESTER EN CONTACT</span>
                    <div className='flex gap-4 space-y-2'>
                        <Image
                            src="/images/instagram.jpg"
                            alt="Placeholder"
                            width={200}
                            height={200}
                            className='w-5 h-5 object-cover'
                        />
                        <Image
                            src="/images/facebook.jpg"
                            alt="Placeholder"
                            width={200}
                            height={200}
                            className='w-5 h-5 object-cover'
                        />
                        <Image
                            src="/images/linkedin.jpg"
                            alt="Placeholder"
                            width={200}
                            height={200}
                            className='w-5 h-5 object-cover'
                        />
                    </div>
                    <p className='space-y-2 text-sm'>Des questions? Ecrivez-nous à:client@marwa.com</p>
                    <p> &copy;2022-2024,Marwa.All Rights Reserved. Designed and developed by Marwa.</p>
                </div>
                <div className='grid grid-cols-5 gap-20 '>
                    <div className="space-y-4 text-sm">
                        <h1 className="text-base">E-SHOP</h1>
                        <p>Blouses & Chemises</p>
                        <p>Robes</p>
                        <p>Pantalons</p>
                        <p>Denim</p>
                        <p>Outerwear</p>
                        <p>Accessoires</p>
                        <p>Nouveautés</p>
                        <p>Tout Afficher</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <h1 className="text-base">A PROPOS</h1>
                        <p>Notre Histoire</p>
                        <p>Nos Magasins</p>
                        <p>Carrières</p>
                    </div>
                    <div className='space-y-2 text-sm'>
                        <h1 className="text-base">SERVICE CLIENT</h1>
                        <p>Livraisons</p>
                        <p>Retours</p>
                        <p>Guide des Tailles</p>
                        <p>FAQ</p>
                        <p>Conditions Générales de Vente</p>
                        <p>Politique de confidentialité</p>
                        <p>Comment passer commande ? </p>
                        <p>شروط البيع العامة</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <h1 className="text-base">NOUS CONTACTER</h1>
                        <p>Service client:</p>
                        <p>Mail:client@marwa.com</p>
                        <p>Tél:+212(0)5.22.91.14.17</p>
                        <p>Du lundi au vendredi de 9h00 à 17h00</p>
                        <p>Partenariats:</p>
                        <p>partnerships@marwa.com</p>
                        <p>Candidatures:</p>
                        <p>cv@marwa.com</p>   
                    <h1 className='text-6xl font-bold mt-8 mb-8'> marwa </h1>
                    </div>
                </div>
            </div>
            {/*Mobile Footer */}
            <div className='justify-between items-start bg-red-300 px-8 gap-40 py-10 text-white flex lg:hidden'>
                <div className='flex flex-col space-y-4 text-sm'>
                    <h1 className="text-base">NEWSLETTER</h1>
                    <p className="flex text-sm bg-black h-10">
                        <span className="bg-white text-gray-300 flex-3 flex items-center px-2">
                            Adresse email
                        </span>
                        <span className="flex-1 flex items-center px-10 py-6 text-sm text-white">
                            S&apos;INSCRIRE
                        </span>
                    </p>
                    <p className='space-y-2 text-sm'>inscrivez-vous pour recevoir des e-mails peu fréquents sur les offre spéciales et les nouveautés
                    </p>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col'>
                            <div className="space-y-4 text-sm">
                                <h1 className="text-base">E-SHOP</h1>
                                <p>Blouses & Chemises</p>
                                <p>Robes</p>
                                <p>Pantalons</p>
                                <p>Denim</p>
                                <p>Outerwear</p>
                                <p>Accessoires</p>
                                <p>Nouveautés</p>
                                <p>Tout Afficher</p>
                            </div>
                            <div className='space-y-4 text-sm mt-7'>
                                <h1 className="text-base">SERVICE CLIENT</h1>
                                <p>Livraisons</p>
                                <p>Retours</p>
                                <p>Guide des Tailles</p>
                                <p>FAQ</p>
                                <p>Conditions Générales de Vente</p>
                                <p>Politique de confidentialité</p>
                                <p>Comment passer commande ? </p>
                                <p>شروط البيع العامة</p>
                            </div>
                            <h1 className='text-6xl font-bold mt-8 mb-8'> marwa </h1>
                            <div className='flex flex-col gap-4 '>
                                <span>RESTER EN CONTACT</span>
                                <div className='flex gap-4 space-y-2'>
                                    <Image
                                        src="/images/instagram.jpg"
                                        alt="Placeholder"
                                        width={200}
                                        height={200}
                                        className='w-5 h-5 object-cover'
                                    />
                                    <Image
                                        src="/images/facebook.jpg"
                                        alt="Placeholder"
                                        width={200}
                                        height={200}
                                        className='w-5 h-5 object-cover'
                                    />
                                    <Image
                                        src="/images/linkedin.jpg"
                                        alt="Placeholder"
                                        width={200}
                                        height={200}
                                        className='w-5 h-5 object-cover'
                                    /></div>
                                <p className='space-y-2 text-sm'>Des questions? Ecrivez-nous à:client@marwa.com</p>
                                <p> &copy;2022-2024,Marwa.All Rights Reserved. Designed and developed by Marwa.</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="space-y-4 text-sm mb-40">
                                <h1 className="text-base">A PROPOS</h1>
                                <p>Notre Histoire</p>
                                <p>Nos Magasins</p>
                                <p>Carrières</p>
                            </div>
                            <div className="space-y-4 text-sm">
                                <h1 className="text-base">NOUS CONTACTER</h1>
                                <p>Service client:</p>
                                <p>Mail:client@marwa.com</p>
                                <p>Tél:+212(0)5.22.91.14.17</p>
                                <p>Du lundi au vendredi de 9h00 à 17h00</p>
                                <p>Partenariats:</p>
                                <p>partnerships@marwa.com</p>
                                <p>Candidatures:</p>
                                <p>cv@marwa.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
