import {Input} from "@/components/ui/Input"
import { Checkbox } from "@/components/ui/Checkbox"
import {Button} from "@/components/ui/Button"
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

      <CardTitle>Login to Your Account</CardTitle>
        </div>
      <div className="text-center">
        <div className=" w-10/12 mx-auto pb-10">
        <Input type="text" placeholder ="Pin Number"/>
        <Input type="password" placeholder ="Password"/>
        </div>
        <div className="flex justify-around pb-10">
        <div className="flex"><Checkbox />
        <div>
            Remember Me
          </div>
        </div>
          <div>
            Forget Password?
          </div>
        </div>
        <div className="pb-10">
          <Button>Login</Button> 
        </div>
      </div>
    </div>
    </Card>
      </div>
    </main>
  )
}
