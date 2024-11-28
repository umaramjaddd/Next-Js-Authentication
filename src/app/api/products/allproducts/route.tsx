import Product from "@/src/Models/productModel";
import { NextRequest, NextResponse } from "next/server";
import Connect from "@/src/lib/mongodb";
import { connect } from "http2";


export async function GET(request: NextRequest) {
  try {

    Connect();
    const allproducts = await Product.find().populate("relatedUser");
    if (!allproducts) {
      return NextResponse.json(
        { message: "no products found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ Message: `found ${allproducts.length} products`, allproducts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
