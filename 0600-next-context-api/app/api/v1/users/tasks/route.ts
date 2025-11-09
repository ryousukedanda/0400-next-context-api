import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';
import AppDate from '../../../lib/date';
import { getTasks, setTasks, getProjects, getUUID } from '../../../datastore';
import { factory } from '../../../datastore/models';
import { PageInfo } from '../../../datastore/models/pagination';

function parse(dateString: string) {
  if (!dateString) {
    return;
  }

  const [year, month, day] = dateString
    .split('-')
    .map((str) => parseInt(str, 10));
  return new AppDate(new Date(year, month - 1, day));
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 20;
  const status = searchParams.get('status') || ['scheduled'];

  const tasks = getTasks().filter((it: any) => {
    return status.includes(it.status);
  });

  tasks.sort((a: any, b: any) => {
    const aa = parse(a.deadline);
    const bb = parse(b.deadline);
    return aa?.isAfter(bb as AppDate) ? 1 : -1;
  });
  const pageInfo = new PageInfo({
    page,
    limit,
    totalCount: tasks.length,
  });

  const data = pageInfo.paginate(tasks);

  return NextResponse.json({
    data,
    pageInfo: pageInfo.serialize,
  });
}

export async function POST(request: NextRequest) {
  const { projectId, ...rest } = await request.json();

  const tasks = getTasks();
  const project = getProjects().find((it: any) => it.id === projectId);

  const task = factory.task({
    id: getUUID(),
    ...rest,
    project,
    createdAt: dayjs().format(),
    updatedAt: dayjs().format(),
  });

  const error = task.validate();
  if (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 400,
      }
    );
  }

  tasks.push(task.raw);
  setTasks(tasks);

  return NextResponse.json(
    {
      data: null,
    },
    {
      status: 201,
    }
  );
}
