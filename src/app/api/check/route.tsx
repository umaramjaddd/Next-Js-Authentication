import { UserID } from "@/src/helpers/UserID";
import Connect from "@/src/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {
    console.log('yeesdsf')
    UserID();
    console.log(UserID.id);
    
    Connect();
    
    return NextResponse.json({"idd": UserID});
    
}