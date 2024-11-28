import Connect from "@/src/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/src/Models/userModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

Connect();

export async function POST(request: NextRequest) {
  try {

    const tokenExists = cookies().get('jwttoken')
    console.log(tokenExists);
    if(tokenExists){
        return NextResponse.json({Error: "User Already Logged in"}, {status: 400})
    }

    const reqBody = await request.json();
    const { email, password } = reqBody;

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return NextResponse.json({ error: "No User found" }, { status: 404 });
    }

    const passwordMatches = await bcryptjs.compare(password, userExists.password);

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "Password Not Correct" },
        { status: 400 }
      );
    }

    //Creating Token
    const tokenData = {
      id: userExists._id,
      email: userExists.email,
      username: userExists.displayname,
    };

    const token = await jwt.sign(tokenData, process.env.Secret_Key!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      Message: "Logged in Successfully",
      success: true,
    });

    response.cookies.set("jwttoken", token, {   
        httpsOnly: true,
    })
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
