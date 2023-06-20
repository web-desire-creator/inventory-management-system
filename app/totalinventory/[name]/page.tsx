import { productRecord, totalinventorydata } from "@/app/data/Data";
import { Card } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { Button } from "@mui/material";
import Link from "next/link";

export default function GiveName({ params, searchParams }: {
    params: { name: string },
    searchParams: { id: string },
  }) {
    
      return (
        <div>
              Following is the previous record of {params.name}:
              <div className="text-red-900 text-lg"><Link href="/totalinventory"> Back to Main Page </Link></div>

              <Card className="mt-10">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead >Id</TableHead>
                    <TableHead>Person Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead >Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                { 
                   productRecord.map((item)=>(  
                     
                    <TableRow>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.personName}</TableCell>
                    <TableCell>{item.Quantity}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    </TableRow>
                    ))
                  }
                    </TableBody>
                </Table>
            </Card>
        </div>
      )
    }