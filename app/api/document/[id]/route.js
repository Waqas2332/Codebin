import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/utils/dbConnect";
import DocumentFile from "@/models/documentFile";

connect();
export async function GET(request, context) {
  try {
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
        value: response.value,
        programmingLanguage: response.programmingLanguage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
