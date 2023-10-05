import React from 'react'
import Sidebar from '@/components/Sidebar'
import HeroSection from '@/components/HeroSection'
import RecordData from '@/components/RecordData'
export default function dashboard() {
   
    
    return (
    <div className='bg-slate-500 grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-10 w-4/5 pt-10 mx-auto'>
            
            <HeroSection/>
            <div className='mt-5 flex flex-col'>
            <RecordData/>
        </div>
        </div>

    </div>
  )
}

