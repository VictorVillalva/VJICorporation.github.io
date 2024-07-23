
// import * as React from "react"
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"
// import { useEffect, useState } from "react"
// import axios from "axios"


// const combinedChartData = [
//     { date: "2024-04-01", desktop: 222, holtWinter: 150, service: 100, serviceHoltWinter: 0},
//     { date: "2024-05-02", desktop: 97, holtWinter: 180, service: 97, serviceHoltWinter: 0},
//     { date: "2024-06-03", desktop: 100, holtWinter: 120, service: 200, serviceHoltWinter: 0},
//     { date: "2024-07-04", desktop: 130, holtWinter: 260, service: 0, serviceHoltWinter: 0},
//     { date: "2024-08-05", desktop: 23, holtWinter: 290, service: 323, serviceHoltWinter: 0},
// ]

// interface getCategoriesData{
//     date:string;
//     realScoreBehavior: number;
//     realScoreDriver: number;
//     realScoreNavigation: number;
//     realScoreService: number;
//     realScoreStops:number;
//     realScoreTrafficSign: number;
//     realScoreTravelTime: number;
//     HWScoreBehavior: number;
//     HWScoreDriver: number;
//     HWScoreNavigation: number;
//     HWScoreService: number;
//     HWScoreStops:number;
//     HWScoreTrafficSign: number;
//     HWScoreTravelTime: number;
// }

// type ChartConfigItem = {
//     label: string;
//     color: string;
//     holtwinter?: string;
// };

// type ChartConfig = {
//     [key: string]: ChartConfigItem;
// };

// const chartConfig = {
//     realScoreBehavior: {
//         label: "Score Behavior",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreBehavior",
//     },
//     HWScoreBehavior: {
//         label: "HW Score Behavior",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreDriver: {
//         label: "Score Driver",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreDriver",
//     },
//     HWScoreDriver: {
//         label: "HW Score Driver",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreNavigation: {
//         label: "Score Navigation",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreNavigation",
//     },
//     HWScoreNavigation: {
//         label: "HW Score Navigation",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreService: {
//         label: "Score Service",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreService",
//     },
//     HWScoreService: {
//         label: "HW Score Service",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreStops: {
//         label: "Score Stops",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreStops",
//     },
//     HWScoreStops: {
//         label: "HW Score Stops",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreTrafficSign: {
//         label: "Score Traffic Sign",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreTrafficSign",
//     },
//     HWScoreTrafficSign: {
//         label: "HW Score Traffic Sign",
//         color: "hsl(var(--chart-2))",
//     },
//     realScoreTravelTime: {
//         label: "Score Travel Time",
//         color: "hsl(var(--chart-1))",
//         holtwinter: "HWScoreTravelTime",
//     },
//     HWScoreTravelTime: {
//         label: "HW Score Travel Time",
//         color: "hsl(var(--chart-2))",
//     },
//     views:{
//         label: "Datos",
//         color: "hsl(var(--chart-1))"
//     },
// } satisfies ChartConfig

// // Función para formatear números con comas
// const formatNumber = (num: number) => num.toLocaleString();

// const Categories = () => {
//     const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("realScoreBehavior")
//     const [activeHoltWinter, setActiveHoltWinter] = React.useState<keyof typeof chartConfig>("holtWinter")
//     const [getCategoriesData, setGetCategoriesData] = useState<getCategoriesData[]>([]);

//     // useEffect(() => {
//     //     const getData = async () => {
//     //         try{
//     //             const response = await axios.get('https://rabbit-go.sytes.net/ts/analyze');
//     //             const getCategoriesData = response.data.data.categories;
//     //             console.log("dentro de ", getCategoriesData)
//     //             setGetCategoriesData(getCategoriesData);
//     //         }catch(err){
//     //             console.log('Error fetching data: ', err);
//     //         }
//     //     };
//     //     getData();
//     // }, []);
//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await axios.get('https://rabbit-go.sytes.net/ts/analyze');
//                 let data = response.data.data.categories;

//                 // Mapear los datos para cambiar los nombres de las claves
//                 const mappedData = data.map((item: any) => ({
//                     ...item,
//                     realScoreTrafficSign: item['realScoreTraffic Sign'],
//                     realScoreTravelTime: item['realScoreTravel Time'],
//                     HWScoreTrafficSign: item['HWScoreTraffic Sign'],
//                     HWScoreTravelTime: item['HWScoreTravel Time'],
//                     // Eliminar las claves originales con espacios en blanco
//                     ['realScoreTraffic Sign']: undefined,
//                     ['realScoreTravel Time']: undefined,
//                     ['HWScoreTraffic Sign']: undefined,
//                     ['HWScoreTravel Time']: undefined,
//                 }));

//                 // Filtrar las claves 'undefined'
//                 mappedData.forEach((item: any) => {
//                     delete item['realScoreTraffic Sign'];
//                     delete item['realScoreTravel Time'];
//                 });

//                 setGetCategoriesData(mappedData);
//                 console.log("AQUI ESTOY ", mappedData);
//             } catch (err) {
//                 console.log('Error fetching data: ', err);
//             }
//         };
//         getData();
//     }, []);



//     console.log("Categories -> ",getCategoriesData)
    
//     const total = React.useMemo( () => ({
//         realScoreBehavior: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreBehavior, 0),
//         HWScoreBehavior: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreBehavior , 0),
//         realScoreDriver: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreDriver, 0),
//         HWScoreDriver: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreDriver, 0),
//         realScoreNavigation: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreNavigation, 0),
//         HWScoreNavigation: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreNavigation, 0),
//         realScoreService: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreService, 0),
//         HWScoreService: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreService, 0),
//         realScoreStops: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreStops, 0),
//         HWScoreStops: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreStops, 0),
//         realScoreTrafficSign: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreTrafficSign, 0),
//         HWScoreTrafficSign: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreTrafficSign, 0),
//         realScoreTravelTime: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreTravelTime, 0),
//         HWScoreTravelTime: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreTravelTime, 0),

//     }),[])

//     return (
//         <Card>
//         <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
//             <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
//             <CardTitle>Categorias</CardTitle>
//             <CardDescription>
//                 Reporte por categoria
//             </CardDescription>
//             </div>
//             <div className="flex">
//             {["realScoreBehavior","realScoreDriver","realScoreNavigation","realScoreService","realScoreStops","realScoreTrafficSign","realScoreTravelTime"].map((key) => {
//                 const chart = key as keyof typeof chartConfig
//                 return (
//                 <button
//                     key={chart}
//                     data-active={activeChart === chart}
//                     className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
//                     onClick={() => setActiveChart(chart)}
//                 >
//                     <span className="text-xs text-muted-foreground">
//                         {chartConfig[chart].label}
//                     </span>
//                     {/* <span className="text-lg font-bold leading-none sm:text-3xl">
//                         {formatNumber(total[key as keyof typeof total])}
//                     </span> */}
//                 </button>
//                 )
//             })}
//             </div>
//         </CardHeader>
//         <CardContent className="px-2 sm:p-6">
//             <ChartContainer
//             config={chartConfig}
//             className="aspect-auto h-[250px] w-full"
//             >
//             <LineChart
//                 accessibilityLayer
//                 data={getCategoriesData}
//                 margin={{
//                 left: 12,
//                 right: 12,
//                 }}
//             >
//                 <CartesianGrid vertical={false} />
//                 <XAxis
//                 dataKey="date"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 tickFormatter={(value) => value.slice(0,3)}
//                 />
//             <   ChartTooltip cursor={false} content={<ChartTooltipContent />} />

//                 <Line
//                 dataKey={activeChart}
//                 type="monotone"
//                 stroke={`var(--color-${activeChart})`}
//                 strokeWidth={2}
//                 dot={false}
//                 />
//                 {chartConfig[activeChart]?.holtwinter && (
//                     <Line
//                         type="monotone"
//                         dataKey={chartConfig[activeChart].holtwinter}
//                         stroke={chartConfig[chartConfig[activeChart].holtwinter].color}
//                         strokeWidth={2}
//                         dot={false}
//                     />
//                 )}
//             </LineChart>
//             </ChartContainer>
//         </CardContent>
//         </Card>
//     )
// }

// export default Categories;

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import axios from "axios"

const combinedChartData = [
    { date: "2024-04-01", desktop: 222, holtWinter: 150, service: 100, serviceHoltWinter: 0},
    { date: "2024-05-02", desktop: 97, holtWinter: 180, service: 97, serviceHoltWinter: 0},
    { date: "2024-06-03", desktop: 100, holtWinter: 120, service: 200, serviceHoltWinter: 0},
    { date: "2024-07-04", desktop: 130, holtWinter: 260, service: 0, serviceHoltWinter: 0},
    { date: "2024-08-05", desktop: 23, holtWinter: 290, service: 323, serviceHoltWinter: 0},
]

interface getCategoriesData{
    date:string;
    realScoreBehavior: number;
    realScoreDriver: number;
    realScoreNavigation: number;
    realScoreService: number;
    realScoreStops:number;
    realScoreTrafficSign: number;
    realScoreTravelTime: number;
    HWScoreBehavior: number;
    HWScoreDriver: number;
    HWScoreNavigation: number;
    HWScoreService: number;
    HWScoreStops:number;
    HWScoreTrafficSign: number;
    HWScoreTravelTime: number;
}

type ChartConfigItem = {
    label: string;
    color: string;
    holtwinter?: string;
};

type ChartConfig = {
    [key: string]: ChartConfigItem;
};

const chartConfig = {
    realScoreBehavior: {
        label: "Score Behavior",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreBehavior",
    },
    HWScoreBehavior: {
        label: "HW Score Behavior",
        color: "hsl(var(--chart-2))",
    },
    realScoreDriver: {
        label: "Score Driver",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreDriver",
    },
    HWScoreDriver: {
        label: "HW Score Driver",
        color: "hsl(var(--chart-2))",
    },
    realScoreNavigation: {
        label: "Score Navigation",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreNavigation",
    },
    HWScoreNavigation: {
        label: "HW Score Navigation",
        color: "hsl(var(--chart-2))",
    },
    realScoreService: {
        label: "Score Service",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreService",
    },
    HWScoreService: {
        label: "HW Score Service",
        color: "hsl(var(--chart-2))",
    },
    realScoreStops: {
        label: "Score Stops",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreStops",
    },
    HWScoreStops: {
        label: "HW Score Stops",
        color: "hsl(var(--chart-2))",
    },
    realScoreTrafficSign: {
        label: "Score Traffic Sign",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreTrafficSign",
    },
    HWScoreTrafficSign: {
        label: "HW Score Traffic Sign",
        color: "hsl(var(--chart-2))",
    },
    realScoreTravelTime: {
        label: "Score Travel Time",
        color: "hsl(var(--chart-1))",
        holtwinter: "HWScoreTravelTime",
    },
    HWScoreTravelTime: {
        label: "HW Score Travel Time",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

const formatNumber = (num: number) => num.toLocaleString();

const Categories = () => {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("realScoreBehavior")
    const [getCategoriesData, setGetCategoriesData] = useState<getCategoriesData[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://rabbit-go.sytes.net/ts/analyze');
                let data = response.data.data.categories;

                const mappedData = data.map((item: any) => ({
                    ...item,
                    realScoreTrafficSign: item['realScoreTraffic Sign'],
                    realScoreTravelTime: item['realScoreTravel Time'],
                    HWScoreTrafficSign: item['HWScoreTraffic Sign'],
                    HWScoreTravelTime: item['HWScoreTravel Time'],
                    ['realScoreTraffic Sign']: undefined,
                    ['realScoreTravel Time']: undefined,
                    ['HWScoreTraffic Sign']: undefined,
                    ['HWScoreTravel Time']: undefined,
                }));

                mappedData.forEach((item: any) => {
                    delete item['realScoreTraffic Sign'];
                    delete item['realScoreTravel Time'];
                });

                setGetCategoriesData(mappedData);
                console.log("AQUI ESTOY ", mappedData);
            } catch (err) {
                console.log('Error fetching data: ', err);
            }
        };
        getData();
    }, []);

    console.log("Categories -> ",getCategoriesData)
    
    const total = React.useMemo( () => ({
        realScoreBehavior: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreBehavior, 0),
        HWScoreBehavior: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreBehavior , 0),
        realScoreDriver: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreDriver, 0),
        HWScoreDriver: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreDriver, 0),
        realScoreNavigation: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreNavigation, 0),
        HWScoreNavigation: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreNavigation, 0),
        realScoreService: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreService, 0),
        HWScoreService: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreService, 0),
        realScoreStops: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreStops, 0),
        HWScoreStops: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreStops, 0),
        realScoreTrafficSign: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreTrafficSign, 0),
        HWScoreTrafficSign: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreTrafficSign, 0),
        realScoreTravelTime: getCategoriesData.reduce((acc, curr) => acc + curr.realScoreTravelTime, 0),
        HWScoreTravelTime: getCategoriesData.reduce((acc, curr) => acc + curr.HWScoreTravelTime, 0),
    }), [getCategoriesData]);

    return (
        <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Categorias</CardTitle>
            <CardDescription>
                Reporte por categoria
            </CardDescription>
            </div>
            <div className="flex">
            {["realScoreBehavior","realScoreDriver","realScoreNavigation","realScoreService","realScoreStops","realScoreTrafficSign","realScoreTravelTime"].map((key) => {
                const chart = key as keyof typeof chartConfig
                return (
                <button
                    key={chart}
                    data-active={activeChart === chart}
                    className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                    onClick={() => setActiveChart(chart)}
                >
                    <span className="text-xs text-muted-foreground">
                        {chartConfig[chart].label}
                    </span>
                    {/* <span className="text-lg font-bold leading-none sm:text-3xl">
                        {formatNumber(total[key as keyof typeof total])}
                    </span> */}
                </button>
                )
            })}
            </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
            <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
            >
            <LineChart
                accessibilityLayer
                data={getCategoriesData}
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
            <   ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
                />
                {chartConfig[activeChart]?.holtwinter && (
                    <Line
                        type="monotone"
                        dataKey={chartConfig[activeChart].holtwinter}
                        stroke={chartConfig[chartConfig[activeChart].holtwinter].color}
                        strokeWidth={2}
                        dot={false}
                    />
                )}
            </LineChart>
            </ChartContainer>
        </CardContent>
        </Card>
    )
}

export default Categories;
