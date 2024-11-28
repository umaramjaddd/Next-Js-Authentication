import { NextRequest, NextResponse } from "next/server";
import Product from "@/src/Models/productModel";

type paramss = {
    id : string;
}
export async function POST(request:NextRequest, {params}:{params: paramss }) {
    try {
    const updatedProduct = await Product.findByIdAndUpdate(params.id, {isSold: true}, {new: true});
    if (!updatedProduct) {
       return NextResponse.json({ message: "Failed to update product" }, { status: 500 });
     }
     return NextResponse.json({ message: "Product updated", product: updatedProduct }, { status: 200 });
    
} catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
}

}