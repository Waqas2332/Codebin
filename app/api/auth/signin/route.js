import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConnect";
import User from "@/models/user";

connect();
export async function POST(request) {
  try {
    const data = await request.json();
    const user = await User.find({ email: data.email });
    if (!user) {
      return NextResponse.json(
        { message: "User Not Found", ok: false },
        { status: 404 }
      );
    }
    if (data.password !== user[0].password) {
      return NextResponse.json(
        { message: "Credentials Not Found", ok: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Signed In Successfully", ok: true, user: user },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
