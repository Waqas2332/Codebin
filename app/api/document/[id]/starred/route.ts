import DocumentFile from "@/models/documentFile";
import connectDB from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";

export async function POST(request: NextRequest, context: any) {
  try {
    await connectDB();
    const { userId } = await request.json();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { message: "Invalid User", ok: false },
        { status: 404 }
      );
    }

    const file = await DocumentFile.findById(context.params.id);
    file.starCount++;
    file.starUsers.push(userId);

    const user = await User.findById(userId);
    user.starredFiles.push(file._id);

    await file.save();
    await user.save();

    return NextResponse.json(
      { message: "Added To Favourites", ok: true, data: file },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
