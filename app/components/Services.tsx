'use client'

import Card from "./Card";
import ds from '../../assets/images/code.svg'
import dw from '../../assets/images/diseño-web.svg'
import ms from '../../assets/images/mantenimiento.svg'
import dm from '../../assets/images/movil-d.svg'
import cl from '../../assets/images/cloud.svg'
import { describe } from "node:test";

interface InfoService {
    title: string;
    description: string;
    img: string;
}


const services = () => {
    const infoService: InfoService[] = [
        {
            title: "Desarrollo de software",
            description: "Nos encargamos de desarrollar software a la medida, para impulsar tu negocio a la innovación.",
            img: ds
        },
        {
            title: "Diseño web",
            description: "Generamos diseños en base al mercado de tu negocio para generar una buena experiencia a tus clientes.",
            img: dw
        },
        {
            title: "Mantenimiento de software",
            description: "Damos mantenimiento a tu software para que puedas mejorar su eficiencia y eficacia.",
            img: ms
        },
        {
            title: "Desarrollo movil",
            description: "Hacemos realidad tu idea por medio de nuestro equipo de desarrollo de aplicaciones móviles.",
            img: dm
        },
        {
            title: "Desarrollo en la nube",
            description: "Nos encargamos de migrar tus servicios a la nube para tener un mejor control de ellos.",
            img: cl
        }
    ];
    return (
        <>
        <div id="service" className="container mt-14">
            <div className="flex flex-col items-center mb-10">
                <span className="text-sm tracking-[8.40px] text-neutral-400 mb-3 text-center">Nuestros servicios</span>
                <h2 className="font-semibold text-4xl lg:text-5xl text-[#35012C] text-center">¿Qué necesitas?</h2>
            </div>
            <div className="flex justify-center items-center gap-20 flex-wrap">
                {infoService.map((data, index) => (
                    <Card 
                    key={index}
                    title={data.title}
                    description={data.description}
                    img={data.img}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default services;