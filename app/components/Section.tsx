'use client'
import Image from 'next/image'
import promotion from '@/assets/images/vji-promotion.png'

const section = () => {
    return (
        <>
        <div className="container mt-28 mb-28 ">
            <div className="flex justify-center">
                <div className="">
                    <Image src={promotion} alt="" className='rounded-sm w-[2500px]'/>
                </div>
                <div className="flex flex-col pl-10">
                    <div className="mb-4">
                        <span className='text-sm tracking-[8.40px] text-neutral-400'>| Nosotros</span>
                        <h2 className='font-semibold text-4xl text-pink-950'>Somos una empresa enfocada en desarrollar soluciones innovadoras.</h2>
                    </div>
                    <p className='text-slate-500'>En VJI Corporation, estamos dedicados a desarrollar soluciones tecnológicas innovadoras que transforman la manera en que las empresas operan. Desde nuestra fundación hemos estado a la vanguardia de la tecnología, proporcionando productos y servicios que mejoran la eficiencia y la productividad de nuestros clientes.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default section;