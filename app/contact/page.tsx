import {Input} from "@/components/ui/Input"
import { Checkbox } from "@/components/ui/Checkbox"
import {Button} from "@/components/ui/Button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
export default function Home() {
  return (
    <main className="bg-slate-500 h-screen">
      <div className="mx-auto w-1/3 pt-40">
      <Card>
      <div className="text-center">
        <div className="py-10">

      <CardTitle>Write your Complain!</CardTitle>
        </div>
      <div className="text-center">
        <div className=" w-10/12 flex flex-col gap-y-5 mx-auto pb-8">
        <Input type="text" placeholder ="Name"/>
        <Input type="text" placeholder ="Pin Number"/>
        <Input type="text" placeholder ="Write your Complain here!"/>
        </div>
        <div className="pb-10">
          <Button><Link href="/dashboard">Submit</Link></Button> 
        </div>
      </div>
    </div>
    </Card>
      </div>
    </main>
  )
}
