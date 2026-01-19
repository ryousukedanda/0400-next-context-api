import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 20;

  try {
    const totalCount = await prisma.project.count();
    const projects = await prisma.project.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const hasNext = page * limit < totalCount;
    const hasPrevious = page > 1;

    return NextResponse.json({
      data: projects,
      pageInfo: {
        totalCount,
        limit,
        page,
        hasNext,
        hasPrevious,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
