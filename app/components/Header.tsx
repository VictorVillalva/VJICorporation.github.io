import Logo  from '@/assets/images/Logo-VJI.svg'
import menu from '@/assets/images/menu.svg'
import bg1 from '@/assets/images/bg-figure.png'
import bg2 from '@/assets/images/bg-figure-2.png'
import bg3 from '@/assets/images/bg-figure-3.png'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { useState } from 'react';
import { Link } from 'react-scroll';



const Header = () => {

    const openMenu = (): void => {
        const menu = document.getElementById('menu');
        if (menu) {
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }
    };
    
    return (
        <>
        <header id="inicio" className=''>
            <nav className="relative bg-white py-6">
                <div className="container mx-auto flex items-center">
                    <div className="flex flex-grow">
                        <Image src={ Logo }  alt='VJI Corporation'/>
                    </div>
                    <div className="flex lg:hidden">
                        <Image src={menu} alt='Menu' onClick={openMenu}/>
                    </div>
                    <div id='menu' className="absolute w-full left-0 top-20 hidden flex-grow justify-between items-center lg:flex lg:relative lg:w-auto lg:top-0 lg:py-0 lg:bg-transparent cursor-pointer">
                        <div className='flex flex-col lg:mb-0 lg:flex-grow lg:flex-row'>
                            <Link to="inicio" smooth={true} duration={500} className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Inicio</Link>
                            <Link to="service" smooth={true} duration={500} className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Servicios</Link>
                            <Link to="aboutUs" smooth={true} duration={500} className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Nosotros</Link>
                            <Link to="contact" smooth={true} duration={500} className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Contactanos</Link>
                        </div>
                        <div className='hidden lg:block'>
                            <Button>Contactanos</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;