import {db} from "@/lib/drizzle"
import { returnData } from '@/schema/returnData'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(request:NextRequest) {
//   return NextResponse.json({ data: "working fine" })
const formData = await request.json()
const item_name = formData.item_name as unknown as string
const quantity = formData.quantity as unknown as number
const x = new Date()
const date = x.toISOString();
const issued_to = formData.issued_to as unknown as string
console.log({item_name, quantity, date, issued_to})
    try{  
      await db.insert(returnData).values({item_name, quantity, date, issued_to}).returning();
      const returningdata = await db.select().from(returnData)
      console.log("returning data", {item_name, quantity,date, issued_to})
    }
    catch(error){
      console.log(error)
    }
  }