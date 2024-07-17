'use client'
import Image from 'next/image'
import vji from '@/assets/images/vji-icono.png'

const banner = () => {

    return (
    <>
        <div className="container bg-pink-950 mt-28">
            <div className="flex justify-center items-center p-20">
                <Image src={vji} alt="" className='w-28 h-28'/>
                <div className="pl-10">
                    <h1 className="text-5xl text-white font-normal">
                    Somos una empresa <span className='font-semibold'>100% mexicana</span> que impulsa a la innovación.
                    </h1>
                </div>
            </div>
        </div>
    </>
    );
}

export default banner;