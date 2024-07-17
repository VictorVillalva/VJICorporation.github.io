'use client'
import Image from 'next/image'
import vji from '@/assets/images/vji-icono.png'

const banner = () => {

    return (
    <>
        <div className="container bg-[#35012C] mt-28">
            <div className="flex justify-center items-center p-20">
                <Image src={vji} alt="" className='w-16 h-16'/>
                <div className="pl-5">
                    <h1 className="text-3xl text-white font-normal">
                    Somos una empresa <span className='font-semibold'>100% mexicana</span> que impulsa a la innovación.
                    </h1>
                </div>
            </div>
        </div>
    </>
    );
}

export default banner;