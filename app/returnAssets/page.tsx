"use client"
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/Button'
import { Card, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import React, { useState } from 'react'
import {db} from "@/lib/drizzle"
import { returnData } from '@/schema/returnData'
import { date } from 'drizzle-orm/pg-core'




export default function issueAssets() {
  const [formData, setFormData] = useState({
    item_name:"",
    quantity:0,
    date:"",
    issued_to:""
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try{
      const response = await fetch('/api/submitdata', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle success here, e.g., show a success message to the user
        console.log('Form submitted successfully');
      } else {
        // Handle errors here, e.g., show an error message to the user
        console.error('Form submission failed');
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg-slate-500 grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-10 w-4/5 pt-10 mx-auto'>
        <Card>
            <form className='flex flex-col items-center gap-y-10' onSubmit={handleSubmit} method='POST'>
            <div className='text-5xl pt-10'>
            <CardTitle>Return Assets</CardTitle>
            </div>
            <div className='flex gap-x-32 justify-around pb-10'>
            <div className='flex gap-x-1 text-lg font-bold'>
              <div className=''>
            Item
            </div>
            <div> Name:</div></div>
            
            <Input name='item_name' type="text" value={formData.item_name} onChange= {(e) => setFormData({ ...formData, item_name: e.target.value })} />

            </div>
            <div className='flex gap-x-32 items-center pb-10 text-lg font-bold'>
            
              Quantity:
            
            <Input name='quantity' type='number' value={formData.quantity} onChange= {(e) => setFormData({ ...formData, quantity: e.target.value as unknown as number })} />

            </div>
            <div className='flex gap-x-32 items-center pb-10 text-lg font-bold'>
            
            Date:
          
          <Input name='date' type="text" placeholder='dd/mm/yyyy' value={formData.date} onChange= {(e) => setFormData({ ...formData, date: e.target.value })} />

          </div>
          <div className='flex gap-x-32 items-center pb-10'>
            <div className='flex gap-x-1 text-lg font-bold'>
              <div className=''>
            Issued
            </div>
            <div> to:</div></div>
            
            <Input name='issued_to' type="text" value={formData.issued_to} onChange= {(e) => setFormData({ ...formData, issued_to: e.target.value })}/>

            </div>
            <Button className='mb-10'  type='submit'>Submit</Button>
            </form>

            </Card>
            </div>
    </div>
  )
}