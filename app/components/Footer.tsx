'use client'
import Image from 'next/image'
import vji from '@/assets/images/Logo-VJI.svg'
import icon from '@/assets/images/vji-icono.png'

const Footer = () => {
    return (
        <>
        <footer className='border-t-2 py-10 bg-pink-950'>
            <div className="container flex ">
                <div className="descripction w-full">
                    <div className="flex items-center gap-2.5">
                        <Image src={icon} alt="" className='w-[30px]'/>
                        <span className='text-white text-xl font-semibold'>VJI Corporation</span>
                    </div>
                    <span className='pl-5 text-white'>Dare to be exeptional</span>
                </div>
                <div className="info w-full">
                    {/* <p>Aqui van los iconos</p> */}
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;