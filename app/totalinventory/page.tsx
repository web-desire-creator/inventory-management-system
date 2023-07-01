'use client'
import { CardTitle } from '@/components/ui/Card'
import Card from '@mui/material/Card'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'
import { totalinventorydata, infoData } from '../data/Data'
import{Button} from "@/components/ui/Button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Sidebar from '@/components/Sidebar'
export default function Totalinventory() {
  const [query,setquery]=useState("")
  console.log(totalinventorydata.filter(i=>i.item_name.toLowerCase().includes("an")))
  return (
    <div className='bg-slate-500 grid grid-cols-12'>
    <Sidebar/>
    <div className='col-span-10 w-4/5 pt-10 flex flex-col gap-y-5 mx-auto'>
            <Card>
            <Input type="text" placeholder ="Search" onChange={e=>setquery(e.target.value)}/>
            </Card>
            <Card>
            <div className=' w-4/5 mx-auto'>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead >Item Name</TableHead>
                    <TableHead>Catagory</TableHead>
                    <TableHead>Consumeable</TableHead>
                    <TableHead >Item Unit</TableHead>
                    <TableHead >Total</TableHead>
                    <TableHead >Available</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                { 
                   totalinventorydata.filter((i=>i.item_name.toLowerCase().includes(query))).map((item, index)=>(  
                     
                    <TableRow key={index}>
                    <TableCell> <Link href={"/totalinventory/"+item.item_name}>  {">"} </Link> {item.item_name}</TableCell>
                    <TableCell>{item.Catagory}</TableCell>
                    <TableCell>{item.Consumeable}</TableCell>
                    <TableCell>{item.Item_unit}</TableCell>
                    <TableCell>{item.Total}</TableCell>
                    <TableCell>{item.Available}</TableCell>
                    </TableRow>
                    ))
                  }
                    </TableBody>
                </Table>
                </div>
            </Card>
    </div>
    </div>
  )
}
