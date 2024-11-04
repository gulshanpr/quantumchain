import { NextResponse } from "next/server";
import { getJobs } from "@/lib/notion";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor");

    const jobsData = await getJobs(cursor || undefined);

    return NextResponse.json(jobsData, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
