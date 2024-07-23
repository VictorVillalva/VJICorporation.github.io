'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import bgLogin from '@/assets/images/login-bg.png'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!email || !password) {
            alert("Por favor, llena todos los campos");
            return;
        }

        try {
            const responseNextAuth = await signIn("credentials", {
                email,
                password,
                redirect: false,
        });

        console.log(responseNextAuth)

        if (responseNextAuth?.ok) {
            alert("Inicio de sesión exitoso");
            router.push("/dashboard");
        } else {
            console.error("Error signing in:", responseNextAuth?.error);
            alert("Credenciales incorrectas. Por favor, verifica tus datos.");
        }

        } catch (error) {
            console.error("Error signing in:", error);
            alert("No te puedes mover buey")
        }


    };
    return (
        <>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-6xl font-bold">¡Bienvenido!</h1>
                        <p className="text-balance text-muted-foreground">
                        Ingresa tu cuenta para poder entrar.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Correo</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="correo@example.com"
                            required
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Contraseña</Label>
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                required 
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>
                        <Button type="submit" className="w-full">
                        Entrar
                        </Button>
                    </form>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image src={bgLogin} alt="" className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"/>
            </div>
        </div>
        </>
    );
}

export default Login;