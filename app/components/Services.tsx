'use client'

import Card from "./Card";
import ds from '../../assets/images/code.svg'
import dw from '../../assets/images/diseño-web.svg'
import ms from '../../assets/images/mantenimiento.svg'
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
            title: "Mantenimiento de software",
            description: "Damos mantenimiento a tu software para que puedas mejorar su eficiencia y eficacia.",
            img: ms
        },
        {
            title: "Mantenimiento de software",
            description: "Damos mantenimiento a tu software para que puedas mejorar su eficiencia y eficacia.",
            img: ms
        }
    ];
    return (
        <>
        <div className="container mt-14">
            <div className="flex flex-col items-center bg-red-400">
                <span className="text-sm">Nuestros servicios</span>
                <h2 className="font-semibold text-5xl">¿Qué necesitas?</h2>
            </div>
            <div className="h-[680px] flex justify-center items-center gap-20 flex-wrap">
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