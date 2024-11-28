import { UserID } from "@/src/helpers/UserID";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from "@/src/Models/userModel";
export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();

    const token = cookieStore.get("jwttoken");
    console.log(token);

    const userID = UserID(token);
    const nice = await User.findOne({_id: userID});
    if (!nice) {
        throw new Error("User not found");
      }

    
    return NextResponse.json(
        { nice,  success: true },
        { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
