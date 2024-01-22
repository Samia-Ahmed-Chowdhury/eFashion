import connectMongoDB from '@/config/mongodb'
import  Product  from "@/model/product";
import { NextResponse,NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(NextRequest) {
    await connectMongoDB();
    const products = await Product.find();
    const searchParams=NextRequest.nextUrl.searchParams
    const query=searchParams.get("query")
    console.log(query)
    const f=query?products.filter(cat=>cat.subCategory.includes(query)
     ||cat.subCategory.includes(query.toLowerCase()) ||
     cat.subCategory.includes(query.toUpperCase())
     )
     :products;


    
    return NextResponse.json(f );
  }
