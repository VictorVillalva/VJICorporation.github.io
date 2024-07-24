'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { fetchQuejas } from "../utils/api"
import axios from "axios"


const TableComment = () => {
    const [quejas, setQuejas] = useState([])
    const [error, setError] = useState<string | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});

    useEffect(() =>{
        const token = process.env.NEXT_PUBLIC_TOKEN_QUEJA || '';
        const getQuejas = async () => {
            try{
                const data = await fetchQuejas(token);
                setQuejas(data.data);
            }catch(err){
                setError("Error al hacer fetch en quejas");
                console.log("Aqui esta el error ->>> ",err)
            }
        };
        getQuejas();
    }, []);
    console.log("esta son las quejas ->>>>",quejas);


    const handleInputChange = (id: string, value: string) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [id]: value }));
    };

    const handleSendAnswers = async (id: string) => {
        const token = process.env.NEXT_PUBLIC_TOKEN_ANSWER
        const answer = answers[id];

        if (!answer) {
            alert('El campo esta vacio, ingresa una respuesta')
            return;
        }

        console.log(`Enviando respuesta para la queja con ID: ${id}`); // Verifica la ID en la consola


        try{
            const response = await axios.post('https://rabbit-go.sytes.net/tm/analyze', {
                text: answer
            });

            if (response.status === 200){
                await axios.post(`https://rabbit-go.sytes.net/report_mcs/answer`,{
                    complaintId: id,
                    answer: answer
                }, {
                    headers:{
                        Authorization:`${token}`,
                    },
                });
                // Actualizar el estado local con la nueva respuesta
                setQuejas((prevQuejas:any) =>
                    prevQuejas.map((queja:any) =>
                        queja.id === id
                        ? { ...queja, answer: { complaintId: id, answer } }
                        : queja
                    )
                );
                alert('Respuesta enviada con éxito');
            } else if(response.status === 400){
                alert('Hay groserías en el texto. Por favor, modifica tu respuesta.');
            }
        } catch (e) {
            console.error('Error sending answer:', error);
            alert('Hay groserías en el texto. Por favor, modifica tu respuesta.');
        }
    }
    return (
    <>
    <div className="p-4 mt-5 flex flex-col gap-2.5">
        <div className="">
            <h1 className="font-semibold text-4xl">Quejas</h1>
            <span className="text-slate-500">Lista de quejas de las rutas de Tuxtla Gutierrez</span>
        </div>
        <div className="table">
            <Table className="scroll h-[900px]">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Ruta</TableHead>
                    <TableHead>Mensajes</TableHead>
                    <TableHead>Respuestas</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.isArray(quejas) && quejas.length > 0 ? (quejas.map((queja:any) => (
                        <TableRow key={queja.id}>
                        <TableCell className="font-semibold text-xs">{queja.id}</TableCell>
                        <TableCell className="font-medium w-1/2">{queja.complaint}</TableCell>
                        <TableCell className="w-full flex gap-5">
                            {queja.answer ? (
                                <div>{queja.answer.answer}</div>
                            ):(
                                <>
                                    <Input
                                        value={answers[queja.id] || ''}
                                        onChange={(e) => handleInputChange(queja.id, e.target.value)}
                                        />
                                        <Button className="w-[100px]" onClick={() => handleSendAnswers(queja.id)}>Enviar</Button>
                                </>
                            )}
                        </TableCell>
                        </TableRow>
                    ))
                    ) : (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">No hay quejas disponibles</TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
    </>
    )
}

export default TableComment
