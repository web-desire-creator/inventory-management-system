import { getJWTSecretKey } from "@/lib/auth";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) 
{
    const headersToken =await request.cookies.get("token")?.value;
    console.log(headersToken)
    if (headersToken){
        const verifyToken = await jwtVerify(
            headersToken,
            new TextEncoder().encode(getJWTSecretKey())
          );
        console.log("Verify Auth from Api username", verifyToken.payload.username);
        return NextResponse.json({userName:verifyToken.payload.username});
    }
    return NextResponse.json(
            { Error: "Failed to fetch user" },
            { status: 400 }
    );
    
}
