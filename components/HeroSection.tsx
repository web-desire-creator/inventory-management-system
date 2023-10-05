"use client"
import { users } from "@/app/data/Data";
import { Card, CardTitle } from "./ui/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/username");
    console.log("response is", res)
    if (!res.ok){
        throw new Error("something went wrong");
    }
    return res.json();
  };

  export default function HeroSection() {
  const [data, setData] = useState<string>("81391");
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getData();
          setData(res.userName as string);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the async function
      fetchData();
      
    }, []
  );
    // const data= await getData();
    console.log("data is ",data)
    const user = users.find(item => item.userName === data);
    return (
        <div>
        <Card>
        <div className='flex flex-col items-center gap-y-10'>
        <div className='pt-10'>
        <CardTitle>Personal Details</CardTitle>
        </div>
        <div className='flex gap-x-32 items-center pb-10'>
        <div>
            <Image src={user.image} width={300} height={300} alt="Profile Picture" />
        </div>
        <div className=" w-10/12 mx-auto ">
            <div className='pb-5'>
        {user.name}
            </div>
            Pin Number : {user.userName}
        </div>

        </div>
        </div>

        </Card>
        </div>
  )
}
