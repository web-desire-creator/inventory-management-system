// import conn from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    const req = await request.json;
    console.log (req)
    
}
// export default async (req:any, res:any) => {
//     try {
//         console.log("req nom", req.body)
//         const query = 'INSERT INTO returnData(item_name, quantity, date, issued_to) VALUES($1,$2,$3,$4)'
//         const values = [req.body.item_name, req.body.quantity, req.date, req.body.issued_to]
//       const result = await conn.query(
//           query,
//           values
//       );
//       console.log( "ttt",result );
//   } catch ( error ) {
//       console.log( error );
//   }
  
  
//   };