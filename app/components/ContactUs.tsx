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

const formSchema = z.object({
    username: z.string().min(2).max(50),
    name: z.string().min(2, {
        message: "El nombre debe contener mas de 2 letras.",
    }),
})

const Contact = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: " ",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <>
        <div className="container mt-28 mb-28">
            <Card className='w-full flex p-2'>
                <Card className='bg-[#35012C] w-[800px]'>
                    <Image src={bgVJI} alt="" className='object-cover w-full h-full'/>
                </Card>
                <div className="flex flex-col justify-center w-[700px] h-[600px] pt-5 pb-10 gap-8">
                    <div className="flex flex-col px-5">
                        <h2 className='text-4xl font-semibold text-[#35012C]'>Contactanos</h2>
                        <span className='text-slate-500'>Envianos tu mensaje y trataremos de ponernos en contacto lo mas rapido posible.</span>
                    </div>
                    <form action="" className='flex flex-col justify-start gap-5 mx-5'>
                        <div className="flex flex-row justify-around gap-8">
                            <div className="w-full">
                                <Label>Nombre</Label>
                                <Input type="text" />
                            </div>
                            <div className="w-full">
                                <Label>Apellido</Label>
                                <Input />
                            </div>
                        </div>
                        <div className="flex flex-row justify-around gap-8">
                            <div className="w-full">
                                <Label>Correo</Label>
                                <Input type="email" />
                            </div>
                            <div className="w-full">
                                <Label>Telefono</Label>
                                <Input type="tel" />
                            </div>
                        </div>
                        <div className="flex flex-col h-[200px] gap-2.5">
                            <Label htmlFor=''>Mensaje</Label>
                            <Textarea id='message' placeholder='Escribe tu mensaje aqui' className='h-full'></Textarea>
                        </div>
                    </form>
                    <div className="flex flex-col items-end">
                        <Button className='w-[200px]'>Enviar</Button>
                    </div>
                </div>
            </Card>
        </div>
        </>
    );
}

export default Contact;