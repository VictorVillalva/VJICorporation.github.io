'use client'
import Image from 'next/image'
import vji from '@/assets/images/Logo-VJI.svg'

const Footer = () => {
    return (
        <>
        <footer className='border-t-2 py-10 bg-pink-950'>
            <div className="container flex ">
                <div className="descripction w-full bg-green-300">
                    <Image src={vji} alt="" className='w-[200px]'/>
                    <span className='pl-5'>Dare to be exeptional</span>
                </div>
                <div className="info w-full">
                    <p>Aqui van los iconos</p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;