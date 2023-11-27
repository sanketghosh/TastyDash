import { NextResponse } from "next/server";

export const GET = async () => {
  return new NextResponse("Hello", { status: 200 });
};
