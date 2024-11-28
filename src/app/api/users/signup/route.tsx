import Connect from "@/src/lib/mongodb";
import User from "@/src/Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { uploadBro } from "@/src/helpers/cloudinary_buffer";


Connect();
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) {
  try {
      const formData = await request.formData();
      const { displayname, email, phone, password, pic } = Object.fromEntries(formData.entries());


    //    const reqBody = await request.json();
    // const { displayname, email, phone, password } = reqBody;
      const user = await User.findOne({ email });

      if (user) {
          return NextResponse.json(
              { error: "User already exists" },
              { status: 400 }
          );
      }

        const picture = await uploadBro(pic);
        console.log("url: ", picture);

        if (!picture) {
            throw new Error("Image upload failed");
        }

      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newUser = new User({
          displayname,
          email,
          profilePic: picture,
          phone,
          password: hashedPassword,
      });

      const savedUser = await newUser.save();

      const tokenData = {
          id: savedUser._id,
          email,
          username: displayname,
      };

      const token = await jwt.sign(tokenData, process.env.Secret_Key!, {
          expiresIn: "1d",
      });
      const response = NextResponse.json({
          Message: "Signed up Successfully",
          success: true,
          savedUser,
      });

      response.cookies.set("jwttoken", token, {
          httpsOnly: true,
      });

      return response;
  } catch (error: any) {
      console.error("Error during user creation:", error.message);
      return NextResponse.json(
          { error: error.message, message: "Something went wrong" },
          { status: 500 }
      );
  }
}