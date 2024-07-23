'use cliente'

import bg1 from '@/assets/images/bg-figure.png'
import bg2 from '@/assets/images/bg-figure-2.png'
import bg3 from '@/assets/images/bg-figure-3.png'
import { Button } from '@/components/ui/button';
import Image from 'next/image'


const Presentation = () => {
    
    return (
        <>
        <div className="hola">            
            <div className="container relative flex flex-row justify-center lg:h-[950px] h-[850px]">
                <div className="flex flex-col lg:w-[895px] lg:mt-40 mt-32">
                    <h1 className="lg:text-7xl text-5xl w-auto text-center font-bold pb-3 text-[#35012C]">Transforma tus ideas en realidades <span className='text-gradient'>digitales</span></h1>
                    <p className="text-center"> Convertimos tus conceptos en soluciones digitales innovadoras, diseñadas a medida para impulsar tu negocio y optimizar tus procesos.</p>
                    <div className="pt-8 flex justify-center">
                        <Button className="lg:w-[208px] lg:ml-8">Contactanos</Button>
                    </div>
                </div>
                <Image src={bg1} alt="" className='absolute lg:top-3 lg:left-[100px] lg:w-[165px] w-[30%]'/>
                <Image src={bg2} alt="" className='absolute lg:top-[360px] lg:right-[100px] lg:w-[312px] w-[40%] top-[55%] right-[1px]'/>
                <Image src={bg3} alt="" className='absolute lg:bottom-[200px] lg:left-[20px] bottom-[10%] right-[20%]'/>
            </div>
        </div>
        </>
    );
}

export default Presentation;