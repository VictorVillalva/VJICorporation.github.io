'use client'

import Categories2 from './components/Categories'
import Report from './components/Report'
import ReportCategory from './components/ReportCategory'
import TableComents from './components/Table'

import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { signOut, useSession } from 'next-auth/react'

const Dashboard = () => {

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">RabbitGo</span>
                    </Link>
                    <Link href="#" className="text-foreground transition-colors hover:text-foreground">
                        Dashboard
                    </Link>
                </nav>
                <Sheet>
                <SheetTrigger asChild>
                    <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">RabbitGo</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Dashboard
                        </Link>
                    </nav>
                </SheetContent>
                </Sheet>
                <div className="flex flex-row-reverse w-full items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>[Nombre] | Administrador</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => signOut()}>Salir</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <div className="flex flex-col">
                <div className="flex w-full p-4 gap-5">
                    <div className="chart-total w-full">
                        <Report />
                    </div>
                    <div className="chart-categoria w-full">
                        <ReportCategory />
                    </div>
                </div>
                <div className="tables p-4">
                    <Categories2 />
                </div>
                <div className="tables2">
                    <TableComents />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;