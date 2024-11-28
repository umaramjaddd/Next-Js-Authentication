import { NextRequest, NextResponse } from "next/server";
import { uploadBro } from "@/src/helpers/cloudinary_buffer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("pic");
    var result = await uploadBro(file);
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
