import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request:NextRequest) {
    try {
        const tokenExists = cookies().get('jwttoken');
        if(!tokenExists){
            return NextResponse.json({Error: "User not logged in"}, {status: 400})
        }
        cookies().delete('jwttoken');
        return NextResponse.json({Message: "Logged out successfully", success: true}, {status: 200} )    
    } catch (error: any) {
        return NextResponse.json({Error: error.message}, {status: 400})
    }
    
}