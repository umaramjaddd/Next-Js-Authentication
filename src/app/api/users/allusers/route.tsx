import Connect from "@/src/lib/mongodb";
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";

Connect()

export async function GET(req: NextRequest) {
    try {
        const allUsers = await User.find();
        return NextResponse.json({"Message": "Got it", allUsers})
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }    
}