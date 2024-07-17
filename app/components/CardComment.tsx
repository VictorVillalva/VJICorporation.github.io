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

interface myProps{
    img: string;
    name: string;
    description: string;
}

const cardComent: React.FC<myProps> = ({img, name, description}) => {
    return (
        <>
            <Card className="w-[350px] hover:shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 mb-auto">
                    <Avatar>
                        <AvatarImage src={img} />
                        <AvatarFallback>CN</AvatarFallback>
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