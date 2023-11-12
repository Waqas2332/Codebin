import { NextResponse, NextRequest } from "next/server";
import DocumentFile from "@/models/documentFile";
import { connect } from "@/utils/dbConnect";

connect();
export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    const response = await DocumentFile.create({
      value: data.value,
      description: data.description,
      programmingLanguage: data.programmingLanguage,
    });
    console.log(response);
    return NextResponse.json(
      { message: "Data Entered Succesfully", id: response._id },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
