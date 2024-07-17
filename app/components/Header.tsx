import Logo  from '@/assets/images/Logo-VJI.svg'
import menu from '@/assets/images/menu.svg'
import bg1 from '@/assets/images/bg-figure.png'
import bg2 from '@/assets/images/bg-figure-2.png'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { useState } from 'react';

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
        <header className='lg:h-[996px]'>
            <nav className="relative bg-white py-6">
                <div className="container mx-auto flex items-center">
                    <div className="flex flex-grow">
                        <Image src={ Logo }  alt='VJI Corporation'/>
                    </div>
                    <div className="flex lg:hidden">
                        <Image src={menu} alt='Menu' onClick={openMenu}/>
                    </div>
                    <div id='menu' className="absolute w-full left-0 top-20 hidden  flex-grow justify-between items-center lg:flex lg:relative lg:w-auto lg:top-0 lg:py-0 lg:bg-transparent ">
                        <div className='flex flex-col lg:mb-0 lg:flex-grow lg:flex-row'>
                            <a href="#" className=' border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Inicio</a>
                            <a href="#" className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Nosotros</a>
                            <a href="#" className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Servicios</a>
                            <a href="#" className='border border-white bg-white text-center py-8 transition hover:bg-slate-100 hover:border-slate-300 lg:mr-7 lg:mb-0 lg:py-0 lg:bg-transparent lg:hover:bg-transparent lg:border-0 lg:border-b-4 lg:hover:border-[#35012C] lg:hover:text-[#35012C] lg:text-zinc-300'>Contactanos</a>
                        </div>
                        <div className='hidden lg:block'>
                            <Button>Contactanos</Button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container flex flex-row justify-center  lg:h-[950px]">
                <div className="flex flex-col lg:w-[895px] mt-40">
                    <h1 className="text-7xl w-auto text-center font-bold pb-3 text-[#35012C]">Transforma tus ideas en realidades <span className='text-gradient'>digitales</span></h1>
                    <p className="text-center"> Convertimos tus conceptos en soluciones digitales innovadoras, diseñadas a medida para impulsar tu negocio y optimizar tus procesos.</p>
                    <div className="pt-8 flex justify-center">
                        <Button className="lg:w-[208px] ml-8">Contactanos</Button>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;