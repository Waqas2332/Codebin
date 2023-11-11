import { NextResponse, NextRequest } from "next/server";
import Document from "@/models/document";
import { connect } from "@/utils/dbConnect";

connect();
export async function POST(request) {
  try {
    const data = await request.json();
    const response = await Document.create({ value: data.value });
    console.log(response._id);
    return NextResponse.json(
      { message: "Data Entered Succesfully", id: response._id },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
