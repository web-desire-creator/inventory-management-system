"use client"
import {Input} from "@/components/ui/Input"
import { Checkbox } from "@/components/ui/Checkbox"
import {Button} from "@/components/ui/Button"
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
  Card,
  CardTitle,
} from "@/components/ui/Card"
export default function Home() {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    // console.log(object);
    const { accessToken } = await res.json();
    console.log(accessToken);
    if (accessToken) {
      // const nextUrl = searchParams.get('next')
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push("/");
    } else {
      // Make your shiny error handling with a great user experience
      alert("Login failed");
    }
  };

  return (
    <main className="bg-slate-500 h-screen">
      <div className="mx-auto w-1/3 pt-40">
      <Card>
      <div className="text-center">
        <div className="py-10">

      <CardTitle>Login to Your Account</CardTitle>
        </div>
      <div className="text-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 justify-center items-center "
      >
        <div className="flex flex-col gap-y-4 w-10/12 mx-auto pb-10">
        <Input  type="text"
            name="username"
            placeholder="Pin Number"/>
        <Input type="password"
            name="password"
            placeholder="Password"/>
        </div>
        <div className="flex justify-around pb-10">
        <div  className="flex items-stretch"> 
          <div className="flex items-baseline gap-x-1"><Checkbox />
        <div>
            Remember Me
          </div></div>
        </div>
          <div>
            <Link href="/forgetPassword">
            Forget Password?
            </Link>
          </div>
        </div>
        <div className="pb-10">
          <Button  type="submit"
          ><Link href="/">Login</Link></Button> 
        </div>
        </form>
      </div>
    </div>
    </Card>
      </div>
    </main>
  )
}