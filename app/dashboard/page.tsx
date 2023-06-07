import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card"
import { Input } from '@/components/ui/Input'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/Table"

export default function dashboard() {
  return (
    <div className='bg-slate-500 grid grid-cols-12 h-screen'>
        <div className='col-span-2  flex flex-col justify-around bg-cyan-900 text-white items-center'>
            <div>LOGO</div>
            <div>Dashboard</div>
            <div>Total Inventory</div>
            <div>Issue Assets</div>
            <div>Return Assets</div>
            <div>About</div>
            <div>Contact</div>
        </div>

        <div className='col-span-10 w-4/5 pt-10 mx-auto'>
            <div className='flex gap-x-5 justify-center pb-5'>
            <div className='flex-1'>
            <Card>
            <Input type="text" placeholder ="Search"/>    
            </Card>
            </div>
            <Button>Search</Button>
            </div>

            <Card>
            <div className='flex flex-col items-center gap-y-10'>
            <div className='pt-10'>
            <CardTitle>Personal Details</CardTitle>
            </div>
            <div className='flex gap-x-32 items-center pb-10'>
            <div>
                <Image src="/1.jpg" width={300} height={300} alt="Profile Picture" />
            </div>
            <div className=" w-10/12 mx-auto ">
                <div className='pb-5'>
            <Input type="text" placeholder ="Pin Number"/>
                </div>
            <Input type="password" placeholder ="Password"/>
            </div>

            </div>
            </div>

            </Card>
            <div className='mt-5 flex flex-col'>
            <Card>
                <div className='flex py-5 justify-around'>
                <Button>Issue Record</Button>
                <Button>Return Record</Button>
                <Button>Current Record</Button>
                </div>
                <div className='w-4/5 mx-auto'>
                <Table>
                <TableCaption>Issue Record</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead >Item Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead >Issued to</TableHead>
                    <TableHead >Issued By</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>Dell Laptop</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>29/05/23</TableCell>
                    <TableCell>BILAL</TableCell>
                    <TableCell>BILAL</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                    
                </div>
            </Card>
        </div>
        </div>

    </div>
  )
}

