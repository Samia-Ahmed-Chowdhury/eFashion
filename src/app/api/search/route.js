import connectMongoDB from '@/config/mongodb'
import Product from "@/model/product";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(NextRequest) {
  await connectMongoDB();
  const products = await Product.find();
  const searchParams = NextRequest.nextUrl.searchParams
  const query = searchParams.get("query")
  console.log(query)
  const f = query ? products.filter(cat => cat.subCategory.includes(query)
    || cat.subCategory.includes(query.toLowerCase()) ||
    cat.subCategory.includes(query.toUpperCase()) ||
    cat.category.includes(query)
    || cat.category.includes(query.toLowerCase()) ||
    cat.category.includes(query.toUpperCase()) ||
    cat.details.includes(query)
    || cat.details.includes(query.toLowerCase()) ||
    cat.details.includes(query.toUpperCase())
  )
    : products;



  return NextResponse.json(f);
}
