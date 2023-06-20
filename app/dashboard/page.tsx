"use client"
import React from 'react'
import Link from 'next/link'
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
import { useState } from 'react'
import { issueData,ReturnData, currentData } from '../data/Data'
import Sidebar from '@/components/Sidebar'

export default function dashboard() {
    const [issue,setissue]=useState(true)
    const [Return,setReturn]=useState(false)
    const [current,setcurrent]=useState(false)
    return (
    <div className='bg-slate-500 grid grid-cols-12'>
        <Sidebar/>

        <div className='col-span-10 w-4/5 pt-10 mx-auto'>
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
            Saliha Noor
                </div>
                Pin Number : 81391
            </div>

            </div>
            </div>

            </Card>
            <div className='mt-5 flex flex-col'>
            <Card>
                <div className='flex py-5 justify-around'>
                <Button color='3644D9' onClick={()=>{
                    setissue(true)
                    setReturn(false)
                    setcurrent(false)
                }}>Issue Record</Button>
                <Button onClick={()=>{
                    setissue(false)
                    setReturn(true)
                    setcurrent(false)
                }}>Return Record</Button>
                <Button onClick={()=>{
                    setissue(false)
                    setReturn(false)
                    setcurrent(true)
                }}>Current Record</Button>
                </div>
                <div className=' w-4/5 mx-auto'>
                <Table>
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
                   { 
                   issue && issueData.map((item)=>(     
                    <TableRow>
                    
                    <TableCell>{item.item_name}</TableCell>
                    <TableCell>{item.Quantity}</TableCell>
                    <TableCell>{item.Date}</TableCell>
                    <TableCell>{item.Issued_to}</TableCell>
                    <TableCell>{item.Issued_By}</TableCell>
                    </TableRow>   
                    ))}
                    {
                    Return && ReturnData.map((item)=>(     
                        <TableRow>
                        
                        <TableCell>{item.item_name}</TableCell>
                        <TableCell>{item.Quantity}</TableCell>
                        <TableCell>{item.Date}</TableCell>
                        <TableCell>{item.Issued_to}</TableCell>
                        <TableCell>{item.Issued_By}</TableCell>
                        </TableRow>   
                        ))
                     }  
                     {current && currentData.map((item)=>(     
                            <TableRow>
                            
                            <TableCell>{item.item_name}</TableCell>
                            <TableCell>{item.Quantity}</TableCell>
                            <TableCell>{item.Date}</TableCell>
                            <TableCell>{item.Issued_to}</TableCell>
                            <TableCell>{item.Issued_By}</TableCell>
                            </TableRow>   
                            ))
                   } 
                   
                </TableBody>
                </Table>
            </div>
            </Card>
        </div>
        </div>

    </div>
  )
}

