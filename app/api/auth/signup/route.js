import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConnect";
import User from "@/models/user";

connect();
export async function POST(request) {
  try {
    const data = await request.json();
    const user = await User.find({ email: data.email });
    if (user[0]) {
      return NextResponse.json(
        {
          message: "User Already Exists",
          ok: false,
        },
        { status: 409 }
      );
    }
    const newUser = await User.create(data);
    return NextResponse.json(
      {
        message: "User Created Successfully",
        ok: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
