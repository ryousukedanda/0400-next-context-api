import { NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

export async function GET(_, context) {
  try {
    const { id } = await context.params;

    const task = await prisma.task.findUnique({
      where: { id },
      include: { project: true },
    });

    if (!task) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: task });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, context) {
  try {
    const { id } = await context.params;
    const params = await request.json();

    // project オブジェクトが含まれている場合、projectId を抽出
    const { project, ...data } = params;
    if (project && project.id) {
      data.projectId = project.id;
    }

    // deadline が文字列の場合、Date オブジェクトに変換
    if (data.deadline && typeof data.deadline === 'string') {
      data.deadline = new Date(data.deadline);
    }

    // projectId が空文字列の場合は null に設定
    if (data.projectId === '') {
      data.projectId = null;
    }

    const task = await prisma.task.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: { project: true },
    });

    return NextResponse.json({ data: task });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(_, context) {
  try {
    const { id } = await context.params;

    const task = await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ data: task });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
