import { NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 20;
  const status = (searchParams.get('status') || 'scheduled').split(',');

  try {
    const totalCount = await prisma.task.count({
      where: {
        status: { in: status },
      },
    });

    const tasks = await prisma.task.findMany({
      where: {
        status: { in: status },
      },
      include: {
        project: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json({
      data: tasks,
      pageInfo: {
        page,
        limit,
        totalCount,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, status, deadline, projectId, project } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // project オブジェクトが含まれている場合、projectId を抽出
    const finalProjectId = projectId || (project?.id) || null;

    const task = await prisma.task.create({
      data: {
        title,
        description: description || '',
        status: status || 'scheduled',
        kind: 'task',
        deadline: new Date(deadline),
        projectId: finalProjectId,
      },
      include: {
        project: true,
      },
    });

    return NextResponse.json(
      { data: task },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
