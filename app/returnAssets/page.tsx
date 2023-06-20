import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/Button'
import { Card, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import React from 'react'

export default function issueAssets() {
  return (
    <div className='bg-slate-500 grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-10 w-4/5 pt-10 mx-auto'>
        <Card>
            <div className='flex flex-col items-center gap-y-10'>
            <div className='text-5xl pt-10'>
            <CardTitle>Return Assets</CardTitle>
            </div>
            <div className='flex gap-x-32 justify-around pb-10'>
            <div className='flex gap-x-1 text-lg font-bold'>
              <div className=''>
            Item
            </div>
            <div> Name:</div></div>
            
            <Input type="text"/>

            </div>
            <div className='flex gap-x-32 items-center pb-10 text-lg font-bold'>
            
              Quantity:
            
            <Input type="text"/>

            </div>
            <div className='flex gap-x-32 items-center pb-10 text-lg font-bold'>
            
            Date:
          
          <Input type="text"/>

          </div>
          <div className='flex gap-x-32 items-center pb-10'>
            <div className='flex gap-x-1 text-lg font-bold'>
              <div className=''>
            Issued
            </div>
            <div> to:</div></div>
            
            <Input type="text"/>

            </div>
            <Button className='mb-10'>Submit</Button>
            </div>

            </Card>
            </div>
    </div>
  )
}
