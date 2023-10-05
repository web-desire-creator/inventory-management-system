"use client"
import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { Card } from './ui/Card'
import { ReturnData, currentData, issueData } from '@/app/data/Data'

export default function RecordData() {
    const [issue,setissue]=useState(true)
    const [Return,setReturn]=useState(false)
    const [current,setcurrent]=useState(false)

  return (
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
  )
}
