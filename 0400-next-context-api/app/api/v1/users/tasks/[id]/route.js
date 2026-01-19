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

    const task = await prisma.task.update({
      where: { id },
      data: {
        ...params,
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
