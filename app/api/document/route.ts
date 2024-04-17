import { NextResponse, NextRequest } from "next/server";
import DocumentFile from "@/models/documentFile";
import connectDB from "@/config/dbConnect";

export async function POST(request: NextRequest) {
  connectDB();
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
    return NextResponse.json({ ok: false }, { status: 403 });
  }
}
