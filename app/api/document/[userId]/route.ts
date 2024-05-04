import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/dbConnect";
import DocumentFile from "@/models/documentFile";

export async function GET(request: NextRequest, { params }: any) {
  await connectDB();
  try {
    const userId = params.userId;
    if (!userId) {
      return NextResponse.json(
        { message: "User Id is required" },
        { status: 400 }
      );
    }
    const files = await DocumentFile.find({ user: userId });
    console.log(files);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
