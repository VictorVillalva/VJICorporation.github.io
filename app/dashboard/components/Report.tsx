'use client'

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import * as React from "react"
import { useEffect, useState } from "react";
import axios from "axios";

const chartConfigReportCompleted = {
    score: {
        label: "Puntaje",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

interface getTotal{
    date:string;
    score:number;
}

const Report = () => {
    const [getTotal, setGetTotal] = useState<getTotal[]>([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get('https://rabbit-go.sytes.net/ts/analyze');
                const getTotal = response.data.data.general.realData;
                setGetTotal(getTotal);
            }catch(err){
                console.log('Error fetching data: ', err);
            }
        };
        getData();
    }, []);

    console.log(getTotal);
    return (
        <Card>
        <CardHeader>
            <CardTitle>Evaluación de servicio general</CardTitle>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfigReportCompleted} className="lg:h-[100px] lg:w-full">
            <LineChart
                accessibilityLayer
                data={getTotal}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0,3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />}/>
                <Line
                dataKey="score"
                type="natural"
                stroke="var(--color-score)"
                strokeWidth={2}
                dot={false}
                />
            </LineChart>
            </ChartContainer>
        </CardContent>
    </Card>
    )
}

export default Report;

