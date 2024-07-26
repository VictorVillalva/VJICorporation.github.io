'use client'
import Image from 'next/image'
import promotion from '@/assets/images/vji-promotion.png'
import { Button } from "@/components/ui/button"
import  CardComment  from "@/app/components/CardComment"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"  


interface Comment{
    img:string;
    name:string;
    description:string;
}


const section = () => {
    const comment: Comment[] = [
        {
            img: "Hola",
            name: "María González",
            description: "VJI CORPORATION nos ha brindado un software excepcional, que ha optimizado nuestros procesos de manera increíble."
        },
        {
            img: "Hola",
            name: "Juan Manuel",
            description: "El equipo de VJI CORPORATION es muy profesional y siempre están dispuestos a ayudar. Excelente servicio."
        },
        {
            img: "Hola",
            name: "Carlos Ramirez",
            description: "La implementación del software fue rápida y sin problemas. Muy contenta con los resultados."
        },
        {
            img: "Hola",
            name: "Laura Martinez",
            description: "VJI CORPORATION ha transformado la manera en que manejamos nuestros datos. Altamente recomendados."
        },
        {
            img: "Hola",
            name: "Pedro García",
            description: "VJI CORPORATION nos proporcionó una solución personalizada que se adapta perfectamente a nuestras necesidades"
        },
        {
            img: "Hola",
            name: "Javier Pérez",
            description: "El soporte técnico es insuperable. Siempre están ahí para resolver cualquier duda o problema"
        }
    ]





    return (
        <>
        <div className="container mt-28 mb-28">
            <hr className='mb-12'></hr>
            <div className="flex flex-col items-center">
                <div className="mb-20 flex flex-col items-center">
                    <span className="text-sm tracking-[8.40px] text-neutral-400 mb-3 text-center">Nuestras Referencias</span>
                    <h2 className='font-semibold text-5xl text-pink-950 text-center'>Lo que nuestros clientes dicen</h2>
                    <p className='mt-2.5 text-slate-500 text-center'>Siempre buscamos brindar un servicio de calidad a nuestros clientes.</p>
                </div>
                <Carousel className="w-full lg:px-12">
                <CarouselContent className="-ml-1">
                    {comment.map((data, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 ">
                            <CardComment key={index} name={data.name} description={data.description}/>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
                <Carousel className="w-full lg:px-12 mt-5">
                <CarouselContent className="-ml-1">
                    {comment.map((data, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <CardComment key={index} img={data.img} name={data.name} description={data.description} />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>
        </div>
        </>
    );
}

export default section;