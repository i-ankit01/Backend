// This is a API route and this is how you can get the user details using getServerSession()

import { NEXTAUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(NEXTAUTH) // NEXTAUTH is passed as argument to get the user id on the server component 
    return NextResponse.json({
        session
    })
}