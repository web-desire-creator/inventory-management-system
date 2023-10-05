import { getJWTSecretKey } from "@/lib/auth";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {users} from "@/app/data/Data"

// import config from "@/db.config"



export async function POST(request: Request) {
  const body = await request.json();
  const loginUser= users.find(findPerson)
  function findPerson(item:any){
    return item.userName===body.username
  } 
  if (body.username === loginUser?.userName && body.password === loginUser?.password) {
    const jwt = await new SignJWT({
      username: body.username,
      role: "user", // Set your own roles
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1m") // Set your own expiration time
      .sign(new TextEncoder().encode(getJWTSecretKey()));

    cookies().set("token",jwt);

    return NextResponse.json({ accessToken: jwt }, { status: 200 });
  }

  return NextResponse.json(
    { Error: "Failed to create token" },
    { status: 400 }
  );
}