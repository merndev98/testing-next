import { connectMongoDB } from "@/utils/db";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connectMongoDB();

export async function GET() {
    try {
        const data = await Product.find({});
        return new NextResponse(JSON.stringify(data), {
            status: 200,
          
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    const data = await req.formData();
    const title = await data.get("title");
    const description = await data.get("description");
    const price = await data.get("price");
    try {
        await Product.create({
            title: title,
            description: description,
            price: price
        });

   return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ err: "Internal Server Error" }),
            { status: 500 }
        );
    }

}
