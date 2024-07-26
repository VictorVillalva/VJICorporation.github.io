'use client'
import Image from 'next/image'
import bgVJI from '@/assets/images/vji-promotion1.png'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from '@/components/ui/textarea'
import prueba from '@/assets/images/vji-icono.png'
import { useState } from 'react'

const formSchema = z.object({
    username: z.string().min(2).max(50),
    name: z.string().min(2, {
        message: "El nombre debe contener mas de 2 letras.",
    }),
})

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: '',
    });
    
    const handleChange = (e:any) => {
        const { name, value } = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const { nombre, apellido, correo, telefono, mensaje } = formData;
        if (!nombre || !apellido || !correo || !telefono || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        // Aquí puedes agregar la lógica para enviar los datos si es necesario
        alert('Datos enviados');
        setFormData({
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            mensaje: '',
        });
    };  

    return (
        <>
        <div id="contact" className="container mt-28 mb-28">
            <hr className='mb-20' />
            <Card className='lg:w-full flex p-2 flex-col lg:flex-row'>
                <Card className='lg:w-[800px]'>
                    <Image src={bgVJI} alt="" className='lg:object-cover lg:w-full lg:h-full'/>
                </Card>
                <div className="flex flex-col justify-center lg:w-[700px] lg:h-[600px] pt-5 pb-10 gap-8">
                    <div className="flex flex-col px-5">
                        <h2 className='text-4xl font-semibold text-[#35012C]'>Contactanos</h2>
                        <span className='text-slate-500'>Envianos tu mensaje y trataremos de ponernos en contacto lo mas rapido posible.</span>
                    </div>
                    <form  onSubmit={handleSubmit} action="" className='flex flex-col justify-start gap-5 mx-5'>
                        <div className="flex flex-row justify-around gap-8">
                            <div className="w-full">
                                <Label>Nombre</Label>
                                <Input type="text" name='nombre' value={formData.nombre} onChange={handleChange}/>
                            </div>
                            <div className="w-full">
                                <Label>Apellido</Label>
                                <Input name='apellido' value={formData.apellido} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-around gap-8">
                            <div className="w-full">
                                <Label>Correo</Label>
                                <Input type="email" name='correo' value={formData.correo} onChange={handleChange}/>
                            </div>
                            <div className="w-full">
                                <Label>Telefono</Label>
                                <Input type="tel" name='telefono' value={formData.telefono} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="flex flex-col h-[200px] gap-2.5">
                            <Label htmlFor=''>Mensaje</Label>
                            <Textarea id='message' placeholder='Escribe tu mensaje aqui' className='h-full' name='mensaje' value={formData.mensaje} onChange={handleChange}></Textarea>
                        </div>
                        <div className="flex flex-col lg:items-end">
                        <Button type="submit" className='lg:w-[200px]'>Enviar</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
        </>
    );
}

export default Contact;