import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/config/dbConnect";
import DocumentFile from "@/models/documentFile";

export async function GET(request: NextRequest, context: any) {
  try {
    await connectDB();
    if (!mongoose.Types.ObjectId.isValid(context.params.id)) {
      return NextResponse.json(
        {
          message: "Data Not Found",
        },
        { status: 404 }
      );
    }
    const response = await DocumentFile.findById(context.params.id);
    return NextResponse.json(
      {
        message: "Data Fetched Succesfully",
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: NextRequest, context: any) {
  try {
    await connectDB();
    if (!mongoose.Types.ObjectId.isValid(context.params.id)) {
      return NextResponse.json(
        {
          message: "Data Not Found",
        },
        { status: 404 }
      );
    }
    const response = await DocumentFile.findByIdAndDelete(context.params.id);

    // TODO remove deleted files from starred folders

    return NextResponse.json(
      {
        message: "Deleted Succesfully",
        ok: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
