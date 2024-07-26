'use client'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'
import imga from "@/assets/images/clientes.png"

interface myProps{
    name: string;
    description: string;
}

const cardComent: React.FC<myProps> = ({ name, description}) => {
    return (
        <>
            <Card className="hover:shadow-md h-[200px]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 mb-auto">
                    <Avatar>
                        <AvatarImage src="@/assets/images/clientes.png" alt="HL" />
                        <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    {name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-500">
                    {description}
                    </p>
                </CardContent>
            </Card>
        </>
    );
}

export default cardComent;