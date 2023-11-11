import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import Document from "@/models/document";
import { connect } from "@/utils/dbConnect";

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
    const response = await Document.findById(context.params.id);
    return NextResponse.json(
      {
        message: "Data Fetched Succesfully",
        value: response.value,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
