import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
// import { upload_cloudinary } from "@/src/helpers/cloudinary_buffer";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadBro(file: File) {

    if (!file || !(file instanceof Blob)) {
      throw new Error("No file provided or file type is incorrect");
    }

    const buffer = await file.arrayBuffer();
    const bufferData = Buffer.from(buffer);

    // Return a Promise to handle the upload
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          public_id: 'shoe', // Set your desired public_id or other options
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      stream.end(bufferData);
    });

    return uploadResult.url;

}
