import { NextResponse, NextRequest } from 'next/server';
import dayjs from 'dayjs';
import { getTasks, setTasks } from '../../../../datastore';
import { factory } from '../../../../datastore/models';
import { notFound } from '../../../../lib/renderer';
import { TaskInfo } from 'features/tasks/types/tasks';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const task = getTasks().find((it: TaskInfo) => {
    return it.id === id;
  });

  if (!task) {
    return notFound();
  }

  return NextResponse.json({
    data: task,
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  const tasks = getTasks();
  const index = tasks.findIndex((it: TaskInfo) => it.id === id);
  if (index == -1) {
    return NextResponse.json(
      {
        message: 'Not found',
      },
      {
        status: 404,
      }
    );
  }

  const task = factory.task(tasks[index]).assign({
    ...body,
    updatedAt: dayjs().format(),
  });
  const error = task.validate();
  if (error) {
    return notFound();
  }

  tasks[index] = task.raw;
  setTasks(tasks);

  return NextResponse.json({
    data: task.raw,
  });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const tasks = getTasks();
  const index = tasks.findIndex((it: TaskInfo) => it.id === id);
  if (index == -1) {
    return notFound();
  }

  const res = tasks.splice(index, 1);
  setTasks(tasks);

  return NextResponse.json({
    data: res,
  });
}
