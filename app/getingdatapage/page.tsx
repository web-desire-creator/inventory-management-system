import React from 'react'
import {db} from "@/lib/drizzle"
import { returnData } from '@/schema/returnData'
const insertdata= async()=>{
   await db.insert(returnData).values({item_name:"Computer", quantity:2, issued_to:"Abdullah"}).returning();
}
const gettingdatapage = async() => {
    insertdata()
  const returningdata = await db.select().from(returnData)
  console.log("returning data", returningdata)
  return (
    <div>
      This is page
    </div>
  )
}

export default gettingdatapage