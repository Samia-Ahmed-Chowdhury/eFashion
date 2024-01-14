import connectMongoDB from '@/config/mongodb'
import  Product  from "@/model/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({ products });
  }