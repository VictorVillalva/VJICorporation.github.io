'use client'

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"




const chartData2 = [
    { date: "January", desktop: 186, mobile: 80 },
    { date: "February", desktop: 305, mobile: 200 },
    { date: "March", desktop: 237, mobile: 120 },
    { date: "April", desktop: 73, mobile: 190 },
    { date: "May", desktop: 209, mobile: 130 },
    { date: "June", desktop: 214, mobile: 140 },
]

interface getPredictData{
    date:string;
    HWScore:number;
    RealScore:number;
}

const chartConfig2 = {
    HWScore: {
        label: "Predicció de Puntaje",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig


import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const ReportCategory = () => {
    const [getPredictData, setGetPredictData] = useState<getPredictData[]>([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get('https://rabbit-go.sytes.net/ts/analyze');
                const getPredictData = response.data.data.general.predictData;
                setGetPredictData(getPredictData);
            }catch(err){
                console.log('Error fetching data: ', err);
            }
        };
        getData();
    }, []);

    console.log(getPredictData);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Predicción de servicios</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig2}  className="lg:h-[100px] lg:w-full">
                <LineChart
                    accessibilityLayer
                    data={getPredictData}
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
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                    dataKey="HWScore"
                    type="monotone"
                    stroke="var(--color-HWScore)"
                    strokeWidth={2}
                    dot={false}
                    />
                </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default ReportCategory;