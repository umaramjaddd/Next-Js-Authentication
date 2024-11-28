import Product from "@/src/Models/productModel";
import { UserID } from "@/src/helpers/UserID";
import { uploadBro } from "@/src/helpers/cloudinary_buffer";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const token = cookies().get("jwttoken");

    const userid = UserID(token);
    console.log(userid);
    
    // const reqBody = await request.json();
    // const { title, description, price, stock } = reqBody;
    
    const formData = await request.formData();
    const { title, description, price, stock} = Object.fromEntries(formData.entries());
    const images = formData.getAll("pic");
    const imageUrls = [];

    for (const image of images) {
      const imageUrl = await uploadBro(image);
      if (!imageUrl) {
        throw new Error("Image upload failed");
      }
      imageUrls.push(imageUrl);
    }

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      isSold: false,
      relatedUser: userid,
      images: imageUrls,
    });

    const uploadedProduct = await newProduct.save();

    return NextResponse.json({ success: true, product: uploadedProduct });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}