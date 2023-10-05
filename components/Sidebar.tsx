import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Sidebar() {
  return (
    <div className='sticky top-0 font-medium text-lg col-span-2 sticky  h-screen flex flex-col justify-around bg-[#3644D9] text-white items-center'>
    <div ><Link href="/"> <Image src="/LOGO.png" width={100} height={100} alt="I&C LOGO" /></Link></div>
    <div> <Link href="/">Dasboard</Link> </div>
    <div><Link href="/totalinventory">Total Inventory</Link></div>
    <div><Link href="/issueAssets">Issue Assets</Link></div>
    <div><Link href="/returnAssets">Return Assets</Link></div>
    <div><Link href="/about">About</Link></div>
    <div><Link href="/contact">Contact</Link></div>
    </div>
  )
}
